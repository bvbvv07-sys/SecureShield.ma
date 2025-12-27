"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, DollarSign, Shield, TrendingUp, Eye, Mail, CreditCard, AlertTriangle } from "lucide-react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t, dir } = useLanguage();
  const [registeredUsers, setRegisteredUsers] = useState<any[]>([]);

  useEffect(() => {
    // حماية الصفحة - فقط للأدمن
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status === "authenticated" && session?.user?.role !== "admin") {
      router.push("/dashboard");
      return;
    }

    // تحميل المستخدمين المسجلين من localStorage
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    setRegisteredUsers(users);
  }, [status, session, router]);

  const stats = [
    {
      icon: Users,
      label: t.admin.totalCustomers,
      value: registeredUsers.length.toString(),
      change: "+12%",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: DollarSign,
      label: t.admin.totalRevenue,
      value: "€85,420",
      change: "+23%",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      icon: Shield,
      label: t.admin.activeProtections,
      value: "4,567",
      change: "+8%",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: TrendingUp,
      label: "Growth Rate",
      value: "18.5%",
      change: "+5%",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  // تحويل البيانات المسجلة لعرضها
  const customers = registeredUsers.map((user, index) => ({
    id: index + 1,
    firstName: user.firstName,
    lastName: user.lastName,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    password: user.password,
    plan: "basic",
    ipCount: 0,
    joined: new Date(user.registeredAt).toLocaleDateString(),
    status: "active",
  }));

  const getPlanBadgeColor = (plan: string) => {
    switch (plan) {
      case "premium":
        return "bg-purple-100 text-purple-800 border-purple-300";
      case "medium":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "basic":
        return "bg-gray-100 text-gray-800 border-gray-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div dir={dir} className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{t.admin.title}</h1>
            <p className="text-gray-600">{t.admin.overview}</p>
          </div>

          {/* إحصائيات عامة */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </Card>
            ))}
          </div>

          {/* جدول العملاء */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-emerald-600" />
              {t.admin.customers}
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">الاسم الأول</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">اللقب</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Email</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Password</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">{t.admin.joined}</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-gray-500">
                        No registered users yet / لا يوجد مستخدمون مسجلون بعد
                      </td>
                    </tr>
                  ) : (
                    customers.map((customer) => (
                      <tr key={customer.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-3">
                          <span className="font-medium text-emerald-700">{customer.firstName}</span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="font-medium text-emerald-700">{customer.lastName}</span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-blue-500" />
                            <span className="text-gray-700">{customer.email}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                            {customer.password}
                          </code>
                        </td>
                        <td className="py-3 px-3 text-gray-600">
                          {customer.joined}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
