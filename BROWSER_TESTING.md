# Cross-Browser Testing Checklist

## Server-Side Rendering Configuration

This application uses Next.js middleware and requires server-side rendering:

- Make sure `output: 'export'` is **not** present in `next.config.js`
- Ensure that unoptimized images are set to `false` to enable proper image optimization
- Required static assets must be in the `public` directory, especially `public/images/hero-dog.jpg`

## Browser Support Matrix

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Testing Checklist

### 1. Visual Consistency

- [ ] Layout maintains integrity across browsers
- [ ] Typography renders consistently
- [ ] Images display correctly
- [ ] Animations and transitions work smoothly
- [ ] Colors and gradients appear as intended
- [ ] SVG elements render properly
- [ ] Dark mode functions correctly

### 2. Functionality

- [ ] All interactive elements work (buttons, links, forms)
- [ ] Navigation functions properly
- [ ] Form validation works consistently
- [ ] File uploads function correctly
- [ ] Modal/dialog interactions work
- [ ] Touch events work on mobile browsers
- [ ] Keyboard navigation functions properly

### 3. Performance

- [ ] Page load times are consistent
- [ ] Animations perform smoothly
- [ ] No memory leaks present
- [ ] Resources load efficiently
- [ ] No browser-specific performance issues

### 4. Next.js Specific Checks

- [ ] Middleware is functioning properly
- [ ] Image optimization is working as expected
- [ ] Server-side rendered content matches client-side rendered content
- [ ] No hydration errors occur
- [ ] Route transitions work smoothly

### 5. Common Issues & Solutions

#### Missing Images

1. Check Public Directory
   ```bash
   # Ensure the images directory exists
   mkdir -p public/images
   
   # Download required hero image
   curl -L "https://images.unsplash.com/photo-1552053831-71594a27632d" --output public/images/hero-dog.jpg
   ```

2. Image Component Usage
   ```jsx
   // Use Next.js Image component with fallback
   <Image 
     src={imageUrl || DEFAULT_IMAGE_URL}
     alt={alt}
     fill
     className="object-cover"
   />
   ```

#### Safari

1. Flexbox Issues
   ```css
   /* Add this to flex containers in Safari */
   @supports (-webkit-touch-callout: none) {
     .flex-container {
       height: -webkit-fill-available;
     }
   }
   ```

2. Backdrop Filter Support
   ```css
   /* Use fallback for browsers that don't support backdrop-filter */
   .blur-background {
     backdrop-filter: blur(8px);
     -webkit-backdrop-filter: blur(8px);
     background-color: rgba(0, 0, 0, 0.5); /* Fallback */
   }
   ```

#### Firefox

1. Scrollbar Styling
   ```css
   /* Firefox-specific scrollbar styling */
   * {
     scrollbar-width: thin;
     scrollbar-color: var(--primary) transparent;
   }
   ```

2. Grid Gap Support
   ```css
   /* Ensure grid gap works in Firefox */
   .grid-container {
     gap: 1rem; /* Modern browsers */
     grid-gap: 1rem; /* Older Firefox support */
   }
   ```

#### Edge

1. Object-fit Support
   ```css
   /* Ensure images scale correctly in Edge */
   .responsive-image {
     width: 100%;
     height: 100%;
     object-fit: cover;
     font-family: "object-fit: cover"; /* Edge fallback */
   }
   ```

### 6. Testing Tools

1. Browser Developer Tools
   - Network tab for performance monitoring
   - Console for JavaScript errors
   - Elements tab for CSS inspection

2. Cross-browser Testing Services
   - BrowserStack
   - LambdaTest
   - Sauce Labs

3. Automated Testing
   - Cypress
   - Playwright
   - Jest with jsdom

### 7. Implementation Guide

1. Use Feature Detection:
   ```typescript
   // Example from lib/browser-utils.ts
   if (supportsBackdropFilter()) {
     // Use modern backdrop-filter
   } else {
     // Use fallback
   }
   ```

2. Apply Polyfills Selectively:
   ```typescript
   // Only load polyfills when needed
   if (!('IntersectionObserver' in window)) {
     await import('intersection-observer');
   }
   ```

3. CSS Fallbacks:
   ```css
   .modern-component {
     /* Fallback */
     background: rgb(0 0 0 / 0.5);
     /* Modern browsers */
     background: color-mix(in srgb, black 50%, transparent);
   }
   ```

### 8. Next.js Configuration Checks

1. Verify correct next.config.js settings:
   ```js
   // Correct configuration for server-side rendering with middleware
   const nextConfig = {
     // output: 'export', // This should be REMOVED for middleware to work
     images: {
       unoptimized: false, // This should be false for image optimization
       remotePatterns: [
         {
           protocol: 'https',
           hostname: 'images.unsplash.com',
         },
       ],
     },
     // ... other settings
   };
   ```

2. Check for proper environment variables:
   ```
   # Application
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # And any other required variables
   ```

### 9. Regular Testing Schedule

- Test after major updates
- Monthly cross-browser compatibility checks
- Automated tests in CI/CD pipeline
- User feedback monitoring

### 10. Documentation

- Document known issues
- Maintain browser-specific workarounds
- Keep updated compatibility tables
- Track browser version support