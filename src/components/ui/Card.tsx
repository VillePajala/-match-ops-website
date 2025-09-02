import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'testimonial';
  hover?: boolean;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    const baseStyles = 'rounded-lg transition-all duration-300';

    const variants = {
      default: 'bg-slate-800 border border-slate-600 p-6',
      feature: 'bg-slate-800 border border-slate-600 p-6 group',
      testimonial: 'bg-slate-800 border-l-4 border-l-lime-400 rounded-l-none p-6'
    };

    const hoverStyles = hover 
      ? 'hover:-translate-y-1 hover:shadow-xl hover:border-indigo-500/50' 
      : '';

    return (
      <div
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mb-4', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold text-slate-100 mb-2 font-body', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-slate-300 leading-relaxed font-body', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  )
);
CardContent.displayName = 'CardContent';

const CardIcon = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('w-12 h-12 mb-4 text-cyan-400 flex items-center justify-center', className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardIcon.displayName = 'CardIcon';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardIcon };
export default Card;