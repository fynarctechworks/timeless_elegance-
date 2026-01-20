# 📱 Mobile-First Quick Reference Card

## Responsive Breakpoints
```
Mobile:  Base (320px+)
sm:      640px+
md:      768px+
lg:      1024px+
xl:      1280px+
2xl:     1536px+
```

## Common Patterns

### Text Sizes
```jsx
// Headings
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"

// Body
className="text-sm sm:text-base md:text-lg"

// Small
className="text-xs sm:text-sm"
```

### Spacing
```jsx
// Padding
className="p-4 sm:p-6 lg:p-20"

// Margins
className="mb-8 sm:mb-12 lg:mb-24"

// Gaps
className="gap-2 sm:gap-4 lg:gap-8"
```

### Layout
```jsx
// Flex
className="flex flex-col sm:flex-row"

// Grid
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
```

### Visibility
```jsx
// Mobile only
className="block md:hidden"

// Desktop only
className="hidden md:block"

// Tablet+
className="hidden sm:block"
```

### Buttons
```jsx
className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm"
```

### Icons/Images
```jsx
// Small icons
className="size-5 sm:size-6"

// Touch targets
className="size-10 sm:size-11 md:size-12"
```

## Mobile Carousel
```jsx
<div className="carousel-container flex gap-4 overflow-x-auto snap-x -mx-4 px-4 sm:mx-0">
  <div className="min-w-[280px] sm:min-w-[300px] snap-start flex-shrink-0">
    {/* Content */}
  </div>
</div>
```

## Container
```jsx
import Container from './components/Container';

<Container>Content</Container>
<Container size="narrow">Content</Container>
```

## Mobile Nav
```jsx
import MobileNav from './components/MobileNav';

<MobileNav />
```

## Remember
✅ Mobile styles first, then add breakpoints
✅ Touch targets: 44x44px minimum
✅ Test on real devices
✅ Check horizontal overflow
✅ Optimize images

## Files
- `src/pages/Home.jsx` - Responsive home page
- `src/components/MobileNav.jsx` - Mobile navigation
- `src/components/Container.jsx` - Responsive container
- `src/index.css` - Mobile-first utilities
- `MOBILE_FIRST_GUIDE.md` - Full documentation
