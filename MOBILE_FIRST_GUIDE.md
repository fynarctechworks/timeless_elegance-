# Mobile-First Development Guide

## Overview
This project follows a **mobile-first responsive design** approach. All components and pages are built with mobile devices as the primary target, then progressively enhanced for tablets and desktops.

## Responsive Breakpoints (Tailwind CSS)

```css
/* Default: Mobile (0px - 639px) */
sm:  640px   /* Small tablets, large phones */
md:  768px   /* Tablets */
lg:  1024px  /* Small laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large desktops */
```

## Mobile-First Principles

### 1. **Start with Mobile Styles**
Always write base styles for mobile first, then add breakpoints for larger screens:

```jsx
// ✅ CORRECT: Mobile-first
<div className="text-sm sm:text-base md:text-lg lg:text-xl">

// ❌ WRONG: Desktop-first
<div className="text-xl lg:text-lg md:text-base sm:text-sm">
```

### 2. **Spacing Scale (Mobile → Desktop)**

#### Padding/Margins
```jsx
// Small spacing
className="p-4 sm:p-6 lg:p-20"

// Medium spacing
className="py-12 sm:py-16 md:py-20 lg:py-24"

// Large spacing
className="mb-8 sm:mb-12 md:mb-16 lg:mb-24"
```

#### Gap
```jsx
className="gap-2 sm:gap-3 md:gap-4 lg:gap-6"
```

### 3. **Typography Scale**

```jsx
// Headings
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">

// Body text
<p className="text-sm sm:text-base md:text-lg">

// Small text
<span className="text-xs sm:text-sm">
```

### 4. **Layout Patterns**

#### Grid Layouts
```jsx
// Mobile: 1 column, Tablet: 2 columns, Desktop: 3+ columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
```

#### Flexbox Direction
```jsx
// Stack on mobile, row on desktop
<div className="flex flex-col sm:flex-row">
```

#### Hide/Show Elements
```jsx
// Show only on mobile
<div className="block md:hidden">

// Hide on mobile, show on tablet+
<div className="hidden md:block">

// Show only on desktop
<div className="hidden lg:block">
```

### 5. **Button Sizing**

```jsx
// Mobile-optimized buttons
<button className="px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm">
```

### 6. **Image/Container Sizing**

```jsx
// Icons
className="size-5 sm:size-6 md:size-8"

// Buttons/Interactive elements (minimum 44x44px for touch)
className="size-10 sm:size-11 md:size-12"
```

### 7. **Horizontal Scrolling (Mobile Carousels)**

```jsx
<div className="carousel-container flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
  <div className="min-w-[280px] sm:min-w-[300px] lg:min-w-[340px] flex-shrink-0 snap-start">
    {/* Card content */}
  </div>
</div>
```

## Component Checklist

When creating new components, ensure:

- [ ] Base styles work on mobile (320px+)
- [ ] Touch targets are minimum 44x44px
- [ ] Text is readable (minimum 14px on mobile)
- [ ] Images are optimized and responsive
- [ ] Horizontal scrolling works smoothly on touch devices
- [ ] Navigation is accessible on mobile (hamburger menu)
- [ ] Forms are easy to fill on mobile
- [ ] CTAs are prominent and easy to tap
- [ ] Loading states don't block UI
- [ ] Proper spacing prevents accidental taps

## Testing Guidelines

### Test on These Viewports
1. **Mobile**: 375x667 (iPhone SE)
2. **Mobile**: 390x844 (iPhone 12/13/14)
3. **Tablet**: 768x1024 (iPad)
4. **Desktop**: 1440x900
5. **Large Desktop**: 1920x1080

### Performance Considerations
- Use `loading="lazy"` for images below the fold
- Implement responsive images with srcset
- Minimize layout shifts (CLS)
- Optimize touch interactions
- Test on actual devices, not just browser DevTools

## Common Patterns

### Header/Navigation
```jsx
<header className="px-4 sm:px-6 lg:px-20 py-3 sm:py-4">
  <div className="flex items-center justify-between">
    {/* Logo - scales down on mobile */}
    <div className="text-base sm:text-lg md:text-xl">
    
    {/* Desktop nav - hidden on mobile */}
    <nav className="hidden lg:flex">
    
    {/* Mobile menu button */}
    <button className="lg:hidden">
```

### Hero Section
```jsx
<section className="h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh]">
  <div className="px-4 sm:px-6 lg:px-20">
    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl">
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
```

### Card Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
  <div className="aspect-[3/4]">
    {/* Card content */}
  </div>
</div>
```

### Footer
```jsx
<footer className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 md:pb-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
```

## CSS Utilities

### Touch Optimizations
```css
/* Prevent double-tap zoom */
button, a {
  touch-action: manipulation;
}

/* iOS momentum scrolling */
.carousel-container {
  -webkit-overflow-scrolling: touch;
}

/* Remove tap highlight */
* {
  -webkit-tap-highlight-color: transparent;
}
```

## Best Practices

1. **Always test on real devices** - DevTools can't replicate touch behavior
2. **Use semantic HTML** - Better for accessibility and SEO
3. **Optimize images** - Use modern formats (WebP, AVIF)
4. **Minimize layout shifts** - Reserve space for images/content
5. **Test with slow networks** - Use Chrome DevTools throttling
6. **Consider one-handed use** - Place important actions in thumb-reach zone
7. **Use proper contrast ratios** - Minimum 4.5:1 for text
8. **Test in landscape orientation** - Don't forget mobile landscape mode

## Resources

- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [MDN: Mobile Web Best Practices](https://developer.mozilla.org/en-US/docs/Web/Guide/Mobile)
- [Google Web.dev: Mobile Performance](https://web.dev/mobile/)
- [Touch Target Guidelines](https://web.dev/accessible-tap-targets/)

---

**Remember**: If it works great on mobile, it will work on desktop. The reverse is not always true!
