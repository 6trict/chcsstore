# Shoppex Default Theme v3

A modern, high-performance storefront template for Shoppex. Built with React 19, Vite, and Tailwind CSS v4.

---

## Project Structure

This template is organized to make customization straightforward:

```
src/
├── components/
│   ├── ui/              # Base UI components (Button, Card, Badge, Input, Select)
│   ├── snippets/        # Reusable snippets (CartDrawer, SearchBar, ProductCard)
│   ├── blocks/          # Page blocks (Hero, Footer, FAQ, About)
│   └── sections/        # Product sections (ProductGallery, ProductBuyBox, ProductInfoTabs)
├── pages/               # Route pages
│   ├── Home.tsx         # Landing page with product grid
│   ├── Product.tsx      # Individual product details
│   ├── Cart.tsx         # Shopping cart page
│   └── Checkout.tsx     # Checkout flow
├── context/             # React Context providers
│   ├── InitialDataContext.tsx    # SSR initial data
│   └── ThemeSettingsContext.tsx  # Theme customization
├── hooks/               # Custom React hooks
│   ├── useStore.ts      # Store data fetching via SDK
│   ├── useCartSync.ts   # Cart state synchronization
│   └── useToast.tsx     # Toast notifications
├── lib/                 # Utilities and configuration
│   └── cssVars.ts       # CSS custom properties for theming
├── utils/
│   └── cn.ts            # Tailwind class merging utility
├── styles/
│   └── globals.css      # Global styles and Tailwind directives
├── App.tsx              # Main app component with routing
└── main.tsx             # Application entry point
```

---

## Customization Guide

### Theming & Colors

Edit CSS variables in `src/styles/globals.css` to customize the color scheme:

```css
:root {
  --color-primary: theme(colors.violet.600);
  --color-background: theme(colors.zinc.950);
  --color-foreground: theme(colors.zinc.100);
}
```

The theme uses Tailwind CSS v4 with the `zinc` color palette by default.

### Adding New Pages

1. Create your page component in `src/pages/`
2. Import it in `src/App.tsx`
3. Add a `<Route />` definition in the `<Routes>` block

```tsx
// src/pages/About.tsx
export default function AboutPage() {
  return <div>About us content...</div>;
}

// src/App.tsx
import AboutPage from '@/pages/About';

<Routes>
  <Route path="/about" element={<AboutPage />} />
</Routes>
```

### Adding New Components

- **UI Components**: Base primitives go in `src/components/ui/`
- **Snippets**: Reusable pieces (cards, buttons with logic) go in `src/components/snippets/`
- **Blocks**: Full-width page sections go in `src/components/blocks/`
- **Sections**: Product-specific sections go in `src/components/sections/`

### Modifying the Header

The header is defined in `src/App.tsx` within the `Header` component. Customize:
- Logo display
- Navigation links
- Cart button appearance

### Modifying the Footer

Edit `src/components/blocks/Footer.tsx` to customize:
- Footer links
- Social media icons
- Copyright text

### Product Display

- **Product Grid**: `src/pages/Home.tsx` - modify grid layout and card display
- **Product Card**: `src/components/snippets/ProductCard.tsx` - customize individual cards
- **Product Page**: `src/pages/Product.tsx` - full product detail layout
- **Gallery**: `src/components/sections/ProductGallery.tsx` - image carousel
- **Buy Box**: `src/components/sections/ProductBuyBox.tsx` - add to cart section

---

## SDK Integration

This theme uses `@shoppex/sdk` for all data fetching:

```tsx
import { shoppex } from '@shoppex/sdk';

// Get store info
const { data: store } = await shoppex.getStore();

// Get products
const { data: products } = await shoppex.getProducts();

// Get single product
const { data: product } = await shoppex.getProduct(slug);
```

The SDK is initialized in `src/main.tsx` with the shop slug.

---

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Build with SSR/SSG support
bun run build:ssg

# Type checking
bun run typecheck
```

### Local Development with Mocks

Set `VITE_USE_MSW=true` in `.env` to enable mock data via MSW (Mock Service Worker).

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.x | UI Framework |
| Vite | 7.x | Build Tool |
| Tailwind CSS | 4.x | Styling |
| React Router | 7.x | Routing |
| Lucide React | 0.5x | Icons |
| @shoppex/sdk | workspace | API Client |

---

## File Reference

| File | Purpose |
|------|---------|
| `App.tsx` | Main layout, routing, header component |
| `main.tsx` | Bootstrap, SDK initialization, hydration |
| `theme.config.ts` | Theme-specific configuration |
| `components.json` | shadcn/ui CLI configuration |
| `vite.config.ts` | Vite build configuration |

---

## Support

For questions about customization, visit [shoppex.io/docs](https://shoppex.io/docs) or contact support.
