# MatchOps Marketing Website

A modern, responsive marketing website for MatchOps Local - a professional soccer coaching PWA. Built with Next.js 15, TypeScript, and Tailwind CSS 4.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS 4
- **Internationalization**: Full English and Finnish support with next-international
- **Dark Theme Design**: Professional dark aesthetic matching MatchOps Local app
- **Responsive Design**: Mobile-first approach with smooth animations
- **Accessibility**: WCAG 2.1 AA compliant with screen reader support
- **Performance Optimized**: Built for Core Web Vitals and SEO
- **Component Library**: Reusable UI components with consistent design system

## 🛠 Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors

The design system follows the MatchOps brand with a sophisticated dark theme:

- **Primary**: Indigo (#4F46E5) to Violet (#7C3AED) gradient
- **Accents**: Cyan (#22D3EE), Lime (#A3E635), Yellow (#FDE047)
- **Backgrounds**: Slate variants (#0F172A, #1E293B, #334155)
- **Text**: Slate 100, 300, 400 for primary, secondary, muted

### Typography

- **Display Font**: Audiowide (for headings and logo)
- **Body Font**: Rajdhani (for content and UI elements)

### Components

All components are located in `src/components/ui/`:

- `Button` - Primary, secondary, outline, and ghost variants
- `Card` - Feature cards, testimonials, and content cards
- `Container` - Responsive container with various sizes
- `Logo` - Animated holographic logo component
- `Section` - Layout sections with spacing variants

## 🌐 Internationalization

The site supports English and Finnish with automatic locale detection:

- **English**: `/` (default)
- **Finnish**: `/fi`

Translations are managed in `src/locales/`:

- `en.ts` - English translations
- `fi.ts` - Finnish translations
- `client.ts` - Client-side i18n configuration
- `server.ts` - Server-side i18n configuration

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+
- **Large**: 1280px+
- **XLarge**: 1536px+

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```bash
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### SEO Configuration

SEO settings are configured in `src/app/layout.tsx`:

- Open Graph tags
- Twitter Card meta tags
- Structured data support
- Sitemap generation

## 📦 Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── navigation/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Logo.tsx
│       ├── Section.tsx
│       └── index.ts
├── lib/
│   └── utils.ts
└── locales/
    ├── client.ts
    ├── server.ts
    ├── en.ts
    └── fi.ts
```

## 🎯 Roadmap

### Phase 1: Foundation ✅
- [x] Next.js setup with TypeScript
- [x] Tailwind CSS configuration
- [x] Internationalization structure
- [x] Design system components
- [x] Responsive navigation
- [x] Homepage with hero section
- [x] Features showcase

### Phase 2: Content (Next Steps)
- [ ] Features detail page
- [ ] How It Works page  
- [ ] Support documentation
- [ ] About page
- [ ] Contact forms

### Phase 3: Enhancement
- [ ] Interactive app demos
- [ ] Video content integration
- [ ] Animation improvements
- [ ] Performance optimization
- [ ] Analytics integration

### Phase 4: Launch Preparation
- [ ] SEO optimization
- [ ] Social media integration
- [ ] Asset optimization
- [ ] Testing and QA
- [ ] Deployment setup

## 🚦 Current Status

✅ **MVP Complete**: The foundation is ready with:
- Responsive homepage with hero, features, testimonials
- Multi-language support (English/Finnish)
- Modern design system with MatchOps branding
- Mobile-first responsive design
- Accessibility features
- Development environment ready

🔄 **Next Priority**: Add remaining pages and content

## 💡 Development Notes

### Adding New Components

1. Create component in `src/components/ui/`
2. Export from `src/components/ui/index.ts`
3. Follow existing patterns for props and styling
4. Include TypeScript types

### Adding New Pages

1. Create page in `src/app/[locale]/[page]/page.tsx`
2. Add translations to locale files
3. Update navigation menus
4. Test both English and Finnish versions

### Styling Guidelines

- Use design system variables from `globals.css`
- Follow mobile-first responsive patterns
- Include hover and focus states
- Support reduced motion preferences
- Maintain accessibility standards

## 🤝 Contributing

1. Follow existing code patterns
2. Test in both English and Finnish
3. Ensure responsive design works
4. Verify accessibility features
5. Test performance impact

---

## Getting Started (Original)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 📄 License

Copyright © 2025 MatchOps. All rights reserved.