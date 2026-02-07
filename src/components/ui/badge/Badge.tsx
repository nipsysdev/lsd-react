import { Slot } from '@radix-ui/react-slot';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { type BadgeVariants, badgeVariants } from './types';

export interface BadgeProps
  extends React.ComponentProps<'span'>,
    BadgeVariants {
  asChild?: boolean;
  onDismiss?: () => void;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  dot?: boolean;
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  onDismiss,
  onClick,
  icon,
  iconPosition = 'left',
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span';
  const isClickable = Boolean(onClick);
  const isDot = dot || variant === 'dot';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick?.();
    }
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDismiss?.();
  };

  // Get dot size based on size prop
  const getDotSize = () => {
    switch (size) {
      case 'xs':
        return 'lsd:w-[8px] lsd:h-[8px]';
      case 'sm':
        return 'lsd:w-[10px] lsd:h-[10px]';
      case 'md':
        return 'lsd:w-[12px] lsd:h-[12px]';
      case 'lg':
        return 'lsd:w-[14px] lsd:h-[14px]';
      case 'xl':
        return 'lsd:w-[16px] lsd:h-[16px]';
      default:
        return 'lsd:w-[12px] lsd:h-[12px]';
    }
  };

  const dotClasses = isDot ? getDotSize() : '';

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant, size }),
        isClickable && 'lsd:cursor-pointer',
        isDot && 'lsd:rounded-full lsd:p-0 lsd:border-0',
        dotClasses,
        className,
      )}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={handleKeyDown}
      onClick={isClickable ? onClick : undefined}
      {...props}
    >
      {!isDot && (
        <>
          {icon && iconPosition === 'left' && (
            <span className="lsd:flex lsd:items-center lsd:justify-center">
              {icon}
            </span>
          )}
          {children && <span>{children}</span>}
          {icon && iconPosition === 'right' && (
            <span className="lsd:flex lsd:items-center lsd:justify-center">
              {icon}
            </span>
          )}
          {onDismiss && (
            <button
              type="button"
              className="lsd:flex lsd:items-center lsd:justify-center lsd:rounded-full lsd:hover:bg-black/10 lsd:dark:hover:bg-white/10 lsd:transition-colors lsd:cursor-pointer lsd:border-0 lsd:p-0 lsd:bg-transparent"
              onClick={handleDismiss}
              aria-label="Dismiss"
            >
              <CloseIcon />
            </button>
          )}
        </>
      )}
    </Comp>
  );
}

export { Badge };
