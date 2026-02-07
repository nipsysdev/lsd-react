'use client';

import { PanelLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useSidebar } from './SidebarContext';
import type {
  SidebarContentProps,
  SidebarFooterProps,
  SidebarHeaderProps,
  SidebarInputProps,
  SidebarInsetProps,
  SidebarRailProps,
  SidebarSeparatorProps,
  SidebarTriggerProps,
} from './types';

export function SidebarContent({ className, ...props }: SidebarContentProps) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        'lsd:flex lsd:min-h-0 lsd:flex-1 lsd:flex-col lsd:gap-2 lsd:overflow-auto lsd:group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn('lsd:flex lsd:flex-col lsd:gap-2 lsd:p-2', className)}
      {...props}
    />
  );
}

export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn('lsd:flex lsd:flex-col lsd:gap-2 lsd:p-2', className)}
      {...props}
    />
  );
}

export function SidebarSeparator({
  className,
  ...props
}: SidebarSeparatorProps) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('lsd:bg-sidebar-border lsd:mx-2 lsd:w-auto', className)}
      {...props}
    />
  );
}

export function SidebarInput({ className, ...props }: SidebarInputProps) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn(
        'lsd:bg-background lsd:h-8 lsd:w-full lsd:shadow-none',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarInset({ className, ...props }: SidebarInsetProps) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        'lsd:bg-background lsd:relative lsd:flex lsd:w-full lsd:flex-1 lsd:flex-col',
        'lsd:md:peer-data-[variant=inset]:m-2 lsd:md:peer-data-[variant=inset]:ml-0 lsd:md:peer-data-[variant=inset]:rounded-xl lsd:md:peer-data-[variant=inset]:shadow-sm lsd:md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarTrigger({
  className,
  onClick,
  ...props
}: SidebarTriggerProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="outlined"
      size="icon-md"
      className={cn('lsd:size-7', className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="lsd:sr-only">Toggle Sidebar</span>
    </Button>
  );
}

export function SidebarRail({ className, ...props }: SidebarRailProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        'hover:after:bg-sidebar-border lsd:absolute lsd:inset-y-0 lsd:z-20 lsd:hidden lsd:w-4 lsd:-translate-x-1/2 lsd:transition-all lsd:ease-linear lsd:group-data-[side=left]:-right-4 lsd:group-data-[side=right]:left-0 after:lsd:absolute after:lsd:inset-y-0 after:lsd:left-1/2 after:lsd:w-[2px] lsd:sm:flex',
        'lsd:in-data-[side=left]:cursor-w-resize lsd:in-data-[side=right]:cursor-e-resize',
        'lsd:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize lsd:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'hover:group-data-[collapsible=offcanvas]:bg-sidebar lsd:group-data-[collapsible=offcanvas]:translate-x-0 lsd:group-data-[collapsible=offcanvas]:after:left-full',
        'lsd:[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
        'lsd:[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
        className,
      )}
      {...props}
    />
  );
}
