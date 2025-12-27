# SecureShield - Enterprise Server Security Platform 🛡️

A professional server security management platform with multi-language support (French, English, Arabic) and Discord OAuth integration.

## 🌟 Features

### Authentication & Authorization
- ✅ **NextAuth.js v5** - Modern authentication system
- ✅ **Google OAuth** - Sign in with Google account
  - All Google users get User role with Basic plan
- ✅ **Discord OAuth** - Automatic role-based access control
  - Server ID: `1452068992863698996`
  - Required Role ID: `1452069063953088673`
  - Admin access for users with specified role
- ✅ **Credentials Login** - Simple username/password authentication
  - Admin: `11` / `11` → Admin role + Premium plan
  - Any other code → User role + Basic plan

### Multi-Language Support 🌍
- 🇫🇷 **French** (Default)
- 🇬🇧 **English**
- 🇸🇦 **Arabic** (with RTL support)

### Security Plans 💰
1. **Basique** - €40/month
   - Up to 5 IP addresses
   - Basic DDoS protection
   - 24/7 monitoring
   - Email support
   - Monthly reports

2. **Moyen** - €70/month (Most Popular)
   - Up to 20 IP addresses
   - Advanced DDoS protection
   - 24/7 monitoring & alerts
   - Priority support
   - Weekly reports
   - Firewall management
   - SSL certificate

3. **Premium** - €110/month
   - Unlimited IP addresses
   - Enterprise DDoS protection
   - Real-time monitoring
   - Dedicated support team
   - Daily reports & analytics
   - Advanced firewall
   - Free SSL certificates
   - Custom security rules
   - API access

### Pages & Functionality 📄

#### Public Pages
- **Home** (`/`) - Landing page with pricing plans
- **Features** (`/features`) - Detailed features showcase with visual diagrams
- **Login** (`/login`) - Authentication page with Discord OAuth
- **Register** (`/register`) - User registration

#### Protected Pages
- **Dashboard** (`/dashboard`) - User dashboard
  - Active plan overview
  - Protected IPs management
  - Threats blocked statistics
  - Recent activity
  - Add/Remove IP addresses

- **Admin Dashboard** (`/admin`) - Admin panel
  - Customer statistics
  - Revenue overview
  - Customer management
  - Active protections tracking

#### Payment Flow
1. Select plan → `/payment`
2. Enter payment details
3. Add IP addresses → `/setup-ips`
4. Success confirmation → `/success`
5. Access dashboard → `/dashboard`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Discord Application (for OAuth)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd server-security
```

2. **Install dependencies**
```bash
bun install
```

3. **Configure environment variables**

Create `.env.local` file:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
DISCORD_CLIENT_ID=your-discord-client-id
DISCORD_CLIENT_SECRET=your-discord-client-secret
```

4. **Run development server**
```bash
bun run dev
```

Visit `http://localhost:3000`

## 🔐 Discord OAuth Setup

See [Discord Setup Guide](.same/discord-setup.md) for detailed instructions.

### Quick Setup:
1. Create Discord Application at [Discord Developer Portal](https://discord.com/developers/applications)
2. Copy Client ID and Client Secret
3. Add redirect URL: `http://localhost:3000/api/auth/callback/discord`
4. Add to `.env.local`

## 🎨 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Authentication:** NextAuth.js v5
- **Icons:** Lucide React
- **Charts:** Recharts (ready to use)

## 📁 Project Structure

```
server-security/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── features/          # Features showcase
│   │   ├── login/             # Login page
│   │   ├── register/          # Registration page
│   │   ├── dashboard/         # User dashboard
│   │   ├── admin/             # Admin panel
│   │   ├── payment/           # Payment page
│   │   ├── setup-ips/         # IP setup
│   │   └── success/           # Success page
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── Navbar.tsx        # Navigation bar
│   │   └── PricingCard.tsx   # Pricing card component
│   ├── contexts/             # React contexts
│   │   └── LanguageContext.tsx
│   ├── lib/                  # Utilities
│   │   ├── auth.ts          # NextAuth configuration
│   │   ├── translations.ts   # i18n translations
│   │   └── utils.ts         # Helper functions
│   └── types/               # TypeScript types
├── .same/                   # Project documentation
│   ├── todos.md            # Tasks checklist
│   ├── guide.md            # User guide
│   └── discord-setup.md    # Discord setup instructions
└── public/                 # Static assets
```

## 🎯 Key Features Explained

### 1. Language System
- Automatic language detection
- Persistent language preference
- RTL support for Arabic
- Easy to add new languages

### 2. Discord Integration
- Automatic role verification
- Server membership check
- Admin/User role assignment
- Seamless OAuth flow

### 3. IP Management
- Add multiple IP addresses
- Remove IPs anytime
- Real-time status tracking
- Plan-based limits

### 4. Security Dashboard
- Live statistics
- Activity monitoring
- Threat detection logs
- Performance metrics

## 🔧 Customization

### Adding New Language
1. Add translations to `src/lib/translations.ts`
2. Update `Language` type
3. Add language button to Navbar

### Modifying Plans
Edit plan details in `src/lib/translations.ts` under each language:
```typescript
plans: {
  basic: {
    name: "Plan Name",
    price: "40",
    description: "Description",
    features: [...]
  }
}
```

## 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet optimized
- ✅ Desktop enhanced
- ✅ Touch-friendly UI

## 🛠️ Development

### Available Scripts
```bash
bun run dev      # Start development server
bun run build    # Build for production
bun run start    # Start production server
bun run lint     # Run ESLint
```

### Adding shadcn/ui Components
```bash
bunx shadcn@latest add -y -o <component-name>
```

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your repository
2. Add environment variables
3. Deploy!

Build settings:
- Build command: `bun run build`
- Publish directory: `.next`

## 📝 License

This project is private and confidential.

## 🤝 Support

For questions or support, contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and shadcn/ui**
