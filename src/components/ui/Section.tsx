import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'hero' | 'content';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', spacing = 'lg', children, ...props }, ref) => {
    const spacings = {
      sm: 'py-8 sm:py-12',
      md: 'py-12 sm:py-16',
      lg: 'py-16 sm:py-24',
      xl: 'py-24 sm:py-32'
    };

    const variants = {
      default: '',
      hero: 'min-h-screen flex items-center',
      content: 'relative'
    };

    return (
      <section
        className={cn(spacings[spacing], variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;