import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import type { Button } from '@/components/ui/button';
import type { Input } from '@/components/ui/input';
import type { Separator } from '@/components/ui/separator';
import type { TooltipContent } from '@/components/ui/tooltip';

// Constants
export const SIDEBAR_WIDTH = '16rem';
export const SIDEBAR_WIDTH_MOBILE = '18rem';
export const SIDEBAR_WIDTH_ICON = '3rem';
export const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

// Types
export type SidebarContextProps = {
  state: 'expanded' | 'collapsed';
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

export interface SidebarProps extends React.ComponentProps<'div'> {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
}

export interface SidebarProviderProps extends React.ComponentProps<'div'> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface SidebarMenuButtonProps extends React.ComponentProps<'button'> {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
}

export interface SidebarGroupLabelProps extends React.ComponentProps<'div'> {
  asChild?: boolean;
}

export interface SidebarGroupActionProps
  extends React.ComponentProps<'button'> {
  asChild?: boolean;
}

export interface SidebarMenuActionProps extends React.ComponentProps<'button'> {
  asChild?: boolean;
  showOnHover?: boolean;
}

export interface SidebarMenuSubButtonProps extends React.ComponentProps<'a'> {
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
}

export interface SidebarMenuSkeletonProps extends React.ComponentProps<'div'> {
  showIcon?: boolean;
}

export interface SidebarTriggerProps
  extends React.ComponentProps<typeof Button> {}

export interface SidebarRailProps extends React.ComponentProps<'button'> {}

export interface SidebarInsetProps extends React.ComponentProps<'main'> {}

export interface SidebarInputProps extends React.ComponentProps<typeof Input> {}

export interface SidebarHeaderProps extends React.ComponentProps<'div'> {}

export interface SidebarFooterProps extends React.ComponentProps<'div'> {}

export interface SidebarSeparatorProps
  extends React.ComponentProps<typeof Separator> {}

export interface SidebarContentProps extends React.ComponentProps<'div'> {}

export interface SidebarGroupProps extends React.ComponentProps<'div'> {}

export interface SidebarGroupContentProps extends React.ComponentProps<'div'> {}

export interface SidebarMenuProps extends React.ComponentProps<'ul'> {}

export interface SidebarMenuItemProps extends React.ComponentProps<'li'> {}

export interface SidebarMenuSubProps extends React.ComponentProps<'ul'> {}

export interface SidebarMenuSubItemProps extends React.ComponentProps<'li'> {}

export interface SidebarMenuBadgeProps extends React.ComponentProps<'div'> {}

// Variants
export const sidebarMenuButtonVariants = cva(
  'peer/menu-button lsd:flex lsd:w-full lsd:items-center lsd:gap-2 lsd:overflow-hidden lsd:rounded-md lsd:p-2 lsd:text-left lsd:text-sm lsd:outline-hidden ring-sidebar-ring lsd:transition-[width,height,padding] lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground lsd:focus-visible:ring-2 lsd:active:bg-sidebar-accent lsd:active:text-sidebar-accent-foreground lsd:disabled:pointer-events-none lsd:disabled:opacity-50 lsd:group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-lsd:disabled:pointer-events-none aria-lsd:disabled:opacity-50 lsd:data-[active=true]:bg-sidebar-accent lsd:data-[active=true]:font-medium lsd:data-[active=true]:text-sidebar-accent-foreground lsd:data-[state=open]:hover:bg-sidebar-accent lsd:data-[state=open]:hover:text-sidebar-accent-foreground lsd:group-data-[collapsible=icon]:size-8! lsd:group-data-[collapsible=icon]:p-2! lsd:[&>span:last-child]:truncate lsd:[&>svg]:size-4 lsd:[&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground',
        outline:
          'lsd:bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground lsd:hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'lsd:h-8 lsd:text-sm',
        sm: 'lsd:h-7 lsd:text-xs',
        lg: 'lsd:h-12 lsd:text-sm lsd:group-data-[collapsible=icon]:p-0!',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type SidebarMenuButtonVariants = VariantProps<
  typeof sidebarMenuButtonVariants
>;
