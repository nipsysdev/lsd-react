'use client';

import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useSidebar } from './SidebarContext';
import {
  type SidebarMenuActionProps,
  type SidebarMenuBadgeProps,
  type SidebarMenuButtonProps,
  type SidebarMenuButtonVariants,
  type SidebarMenuItemProps,
  type SidebarMenuProps,
  type SidebarMenuSkeletonProps,
  type SidebarMenuSubButtonProps,
  type SidebarMenuSubItemProps,
  type SidebarMenuSubProps,
  sidebarMenuButtonVariants,
} from './types';

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn(
        'lsd:flex lsd:w-full lsd:min-w-0 lsd:flex-col lsd:gap-1',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('lsd:group/menu-item lsd:relative', className)}
      {...props}
    />
  );
}

export function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ...props
}: SidebarMenuButtonProps & SidebarMenuButtonVariants) {
  const Comp = asChild ? Slot : 'button';
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== 'collapsed' || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}

export function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: SidebarMenuActionProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        'lsd:text-sidebar-foreground ring-sidebar-ring lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground lsd:absolute lsd:top-1.5 lsd:right-1 lsd:flex lsd:aspect-square lsd:w-5 lsd:items-center lsd:justify-center lsd:rounded-md lsd:p-0 lsd:outline-hidden lsd:transition-transform lsd:focus-visible:ring-2 lsd:[&>svg]:size-4 lsd:[&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:lsd:absolute after:lsd:-inset-2 md:after:lsd:hidden',
        'lsd:peer-data-[size=sm]/menu-button:top-1',
        'lsd:peer-data-[size=default]/menu-button:top-1.5',
        'lsd:peer-data-[size=lg]/menu-button:top-2.5',
        'lsd:group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:lsd:opacity-100 group-hover/menu-item:lsd:opacity-100 lsd:data-[state=open]:opacity-100 lsd:md:opacity-0',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarMenuBadge({
  className,
  ...props
}: SidebarMenuBadgeProps) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        'lsd:text-sidebar-foreground lsd:pointer-events-none lsd:absolute lsd:right-1 lsd:flex lsd:h-5 lsd:min-w-5 lsd:items-center lsd:justify-center lsd:rounded-md lsd:px-1 lsd:text-xs lsd:font-medium lsd:tabular-nums lsd:select-none',
        'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
        'lsd:peer-data-[size=sm]/menu-button:top-1',
        'lsd:peer-data-[size=default]/menu-button:top-1.5',
        'lsd:peer-data-[size=lg]/menu-button:top-2.5',
        'lsd:group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: SidebarMenuSkeletonProps) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn(
        'lsd:flex lsd:h-8 lsd:items-center lsd:gap-2 lsd:rounded-md lsd:px-2',
        className,
      )}
      {...props}
    >
      {showIcon && (
        <div
          className="lsd:size-4 lsd:rounded-md lsd:bg-sidebar-accent"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <div
        className="lsd:h-4 lsd:flex-1 lsd:rounded-md lsd:bg-sidebar-accent"
        data-sidebar="menu-skeleton-text"
        style={
          {
            '--skeleton-width': width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

export function SidebarMenuSub({ className, ...props }: SidebarMenuSubProps) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        'border-sidebar-border lsd:mx-3.5 lsd:flex lsd:min-w-0 lsd:translate-x-px lsd:flex-col lsd:gap-1 lsd:border-l lsd:px-2.5 lsd:py-0.5',
        'lsd:group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarMenuSubItem({
  className,
  ...props
}: SidebarMenuSubItemProps) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn('lsd:group/menu-sub-item lsd:relative', className)}
      {...props}
    />
  );
}

export function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: SidebarMenuSubButtonProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'lsd:text-sidebar-foreground ring-sidebar-ring lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground lsd:active:bg-sidebar-accent lsd:active:text-sidebar-accent-foreground lsd:[&>svg]:text-sidebar-accent-foreground lsd:flex lsd:h-7 lsd:min-w-0 lsd:-translate-x-px lsd:items-center lsd:gap-2 lsd:overflow-hidden lsd:rounded-md lsd:px-2 lsd:outline-hidden lsd:focus-visible:ring-2 lsd:disabled:pointer-events-none lsd:disabled:opacity-50 aria-lsd:disabled:pointer-events-none aria-lsd:disabled:opacity-50 lsd:data-[active=true]:bg-sidebar-accent lsd:data-[active=true]:text-sidebar-accent-foreground',
        size === 'sm' && 'lsd:text-xs',
        size === 'md' && 'lsd:text-sm',
        'lsd:group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  );
}
