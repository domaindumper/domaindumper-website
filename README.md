# DomainDumper Website

A private Next.js project for domain intelligence and TLD data management.

## 🔒 Private Repository Notice

This repository contains proprietary code and is private. All rights reserved.

## 🚀 Features

- Domain data analytics and insights
- TLD management and tracking
- Multi-language support (English/Hindi)
- Real-time domain availability checking
- Secure authentication system
- Responsive dashboard interface
- Dynamic pricing plans
- FAQ management system

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Styling:** Bootstrap 5
- **State Management:** React Hooks
- **Data Fetching:** SWR
- **Internationalization:** next-i18next
- **Icons:** Material Symbols

## 📦 Installation

1. Clone the repository (requires access):
```bash
git clone https://github.com/yourusername/domaindumper-website.git
```

2. Install dependencies:
```bash
cd domaindumper-website
npm install
```

3. Create `.env.local` file:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add other environment variables
```

4. Run development server:
```bash
npm run dev
```

## 🌐 Environment Setup

Required environment variables:
- `NEXT_PUBLIC_APP_URL`: Application URL
- Add other required variables

## 🗂️ Project Structure 

```
domaindumper-website/
├── components/           # Reusable components
├── context/             # React context providers
├── layouts/             # Page layouts
├── pages/               # Next.js pages
├── public/              
│   └── locales/        # Translation files
├── styles/             # Global styles
└── utils/              # Utility functions
```

## 🔄 Translation System

- English (`/public/locales/en/`)
- Hindi (`/public/locales/hi/`)

Each page has its dedicated translation namespace:
- `common.json`: Shared translations
- `auth.json`: Authentication related
- `pricing.json`: Pricing page
- `about.json`: About page

## 🔐 Security Considerations

- Private API endpoints
- Protected routes
- Environment variable protection
- API rate limiting

## 🧪 Development Guidelines

1. Create feature branches from `develop`
2. Follow naming convention: `feature/feature-name`
3. Add translations for new features
4. Test both language versions
5. Update documentation

## ⚠️ Important Notes

- Keep repository private
- Don't share access credentials
- Regular backup recommended
- Follow security protocols

## 📝 License

Private. All rights reserved.

---
© 2024 DomainDumper. Confidential and Proprietary.