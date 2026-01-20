/**
 * Container Component
 * Mobile-First responsive container with consistent padding
 * 
 * Usage:
 * <Container>Your content</Container>
 * <Container size="narrow">Narrow content</Container>
 * <Container className="bg-white">Custom styles</Container>
 */

function Container({ 
  children, 
  size = 'default', 
  className = '',
  noPadding = false 
}) {
  // Size variants
  const sizeClasses = {
    narrow: 'max-w-3xl',       // 768px
    default: 'max-w-[1440px]', // 1440px
    wide: 'max-w-screen-2xl',  // 1536px
    full: 'max-w-none'         // No max width
  };

  // Padding classes - mobile-first
  const paddingClasses = noPadding 
    ? '' 
    : 'px-4 sm:px-6 lg:px-20';

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        ${paddingClasses} 
        mx-auto 
        w-full
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}

export default Container;

/**
 * Examples:
 * 
 * // Default container with responsive padding
 * <Container>
 *   <h1>My Content</h1>
 * </Container>
 * 
 * // Narrow container for text content
 * <Container size="narrow">
 *   <article>Blog post...</article>
 * </Container>
 * 
 * // Container without padding (for full-width backgrounds)
 * <Container noPadding>
 *   <div className="bg-primary">Full width bg</div>
 * </Container>
 * 
 * // Container with custom classes
 * <Container className="py-12 sm:py-16 lg:py-24">
 *   <section>...</section>
 * </Container>
 */
