import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  isAnimated?: boolean;
}

export const Logo = ({ className, isAnimated = true }: LogoProps) => {
  return (
    <div className={cn('font-display text-4xl font-bold', className)}>
      <span className={cn({ 
        'text-holographic animate-holographic': isAnimated,
        'text-primary-indigo': !isAnimated 
      })}>
        MatchOps Local
      </span>
    </div>
  );
};