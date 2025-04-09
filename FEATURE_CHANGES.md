# Trek Snout - Feature Documentation

## 1. Feature Overview

### Purpose
Trek Snout is a modern web platform dedicated to responsible dog rehoming with a focus on protection, prevention, and thorough vetting of potential adopters.

### Version Information
- Version: 1.0.0
- Implementation Date: March 2024

### Key Components
- Hero Section with expandable content
- Featured Dogs showcase
- Adoption Process steps
- Testimonials from successful adoptions
- Cross-browser compatible UI elements

## 2. Middleware & Server Rendering

### Important Configuration Notes
- The application uses Next.js middleware for route redirects and other functionality
- Server-side rendering is required (not static export)
- Required static assets must be in the `public` directory

### Next.js Configuration
```javascript
// next.config.js (correct configuration)
const nextConfig = {
  // output: 'export', // This must be REMOVED for middleware to work
  images: {
    unoptimized: false, // This enables image optimization 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // other configuration...
};
```

### Required Static Assets
- `/public/images/hero-dog.jpg` - Main hero image
- Other assets defined in component references

## 3. Codebase Changes

### Core Components

#### Hero Section (`components/sections/HeroSection.tsx`)
- Implements a full-screen hero section with dynamic content
- Features server-side rendered images
- Includes expandable mission statement

#### Featured Dogs (`components/sections/FeaturedDogsSection.tsx`)
- Grid-based display of available dogs
- Responsive card layout
- Defensive image loading with fallbacks
- Added default image placeholder

#### Data Structure (`data/adoptables.ts`)
- Updated to use array of images instead of single image property
- Added status and location fields to match the Dog interface
- Fixed string quotes for linting compatibility

### Utility Files

#### Browser Utils (`lib/browser-utils.ts`)
- Feature detection utilities
- Cross-browser compatibility helpers
- Backdrop filter support detection
- Browser-specific optimizations

## 4. Code Structure

### File Organization
```
project/
├── app/
│   ├── dogs/
│   │   └── [id]/
│   ├── rehoming/
│   ├── lost-dogs/
│   ├── about/
│   ├── contact/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedDogsSection.tsx
│   │   └── EnrichmentSection.tsx
│   ├── features/
│   └── ui/
├── data/
│   └── adoptables.ts
├── lib/
│   └── browser-utils.ts
├── types/
│   └── index.ts
├── public/
│   └── images/
│       └── hero-dog.jpg
└── middleware.ts
```

### Middleware Implementation
```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Redirect /adoptables to /dogs
  if (pathname.startsWith('/adoptables')) {
    const newPath = pathname.replace('/adoptables', '/dogs');
    url.pathname = newPath;
    
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/adoptables/:path*'],
};
```

## 5. Design Patterns

### Component Patterns
- Compound Components (UI elements)
- Render Props (dynamic content)
- Custom Hooks (browser detection)
- Container/Presenter pattern

### State Management
- Local state for UI interactions
- React hooks for state management
- Framer Motion for animations
- Controlled form components

### Styling Approach
- Tailwind CSS for utility-first styling
- CSS variables for theming
- Responsive design patterns
- Mobile-first approach

## 6. Cross-Browser Compatibility

### Feature Detection
```typescript
// Example from browser-utils.ts
export const supportsBackdropFilter = (): boolean => {
  if (typeof window === 'undefined') return false;
  return (
    'backdropFilter' in document.documentElement.style ||
    'WebkitBackdropFilter' in document.documentElement.style
  );
};
```

### Defensive Image Loading
```tsx
// Example from FeaturedDogsSection.tsx
<Image
  src={dog.images && dog.images.length > 0 ? dog.images[0] : DEFAULT_DOG_IMAGE}
  alt={dog.name}
  fill
  className="object-cover transition-transform group-hover:scale-105"
/>
```

## 7. Testing Considerations

### Component Testing
- Unit tests for utility functions
- Component rendering tests
- Animation and interaction testing
- Cross-browser compatibility tests

### Edge Cases
- Screen reader accessibility
- Keyboard navigation
- Mobile device interactions
- Slow network conditions

### Browser Testing Matrix
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 8. Performance Optimizations

### Image Optimization
- Next.js Image component usage
- Proper image sizing
- Lazy loading implementation
- Format optimization

### Animation Performance
- GPU-accelerated animations
- Debounced event handlers
- Optimized motion effects
- Reduced layout shifts

### Loading Strategy
- Component lazy loading
- Progressive enhancement
- Optimized asset loading
- Browser-specific optimizations