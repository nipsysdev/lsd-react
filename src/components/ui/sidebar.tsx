'use client';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { PanelLeftIcon } from 'lucide-react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

type SidebarContextProps = {
  state: 'expanded' | 'collapsed';
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }

  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? 'expanded' : 'collapsed';

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH,
              '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            'lsd:group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar lsd:flex lsd:min-h-svh lsd:w-full',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === 'none') {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          'lsd:bg-sidebar lsd:text-sidebar-foreground lsd:flex lsd:h-full lsd:w-(--sidebar-width) lsd:flex-col',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="lsd:bg-sidebar lsd:text-sidebar-foreground lsd:w-(--sidebar-width) lsd:p-0 lsd:[&>button]:hidden"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="lsd:sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="lsd:flex lsd:h-full lsd:w-full lsd:flex-col">
            {children}
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="lsd:group lsd:peer lsd:text-sidebar-foreground lsd:hidden lsd:md:block"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          'lsd:relative lsd:w-(--sidebar-width) lsd:bg-transparent lsd:transition-[width] lsd:duration-200 lsd:ease-linear',
          'lsd:group-data-[collapsible=offcanvas]:w-0',
          'lsd:group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'lsd:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
            : 'lsd:group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          'lsd:fixed lsd:inset-y-0 lsd:z-10 lsd:hidden lsd:h-svh lsd:w-(--sidebar-width) lsd:transition-[left,right,width] lsd:duration-200 lsd:ease-linear lsd:md:flex',
          side === 'left'
            ? 'lsd:left-0 lsd:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'lsd:right-0 lsd:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'lsd:p-2 lsd:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
            : 'lsd:group-data-[collapsible=icon]:w-(--sidebar-width-icon) lsd:group-data-[side=left]:border-r lsd:group-data-[side=right]:border-l',
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="lsd:bg-sidebar lsd:group-data-[variant=floating]:border-sidebar-border lsd:flex lsd:h-full lsd:w-full lsd:flex-col lsd:group-data-[variant=floating]:rounded-lg lsd:group-data-[variant=floating]:border lsd:group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="outlined"
      size="icon"
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

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
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

function SidebarInset({ className, ...props }: React.ComponentProps<'main'>) {
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

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
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

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn('lsd:flex lsd:flex-col lsd:gap-2 lsd:p-2', className)}
      {...props}
    />
  );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn('lsd:flex lsd:flex-col lsd:gap-2 lsd:p-2', className)}
      {...props}
    />
  );
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('lsd:bg-sidebar-border lsd:mx-2 lsd:w-auto', className)}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
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

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn(
        'lsd:relative lsd:flex lsd:w-full lsd:min-w-0 lsd:flex-col lsd:p-2',
        className,
      )}
      {...props}
    />
  );
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        'lsd:text-sidebar-foreground/70 ring-sidebar-ring lsd:flex lsd:h-8 lsd:shrink-0 lsd:items-center lsd:rounded-md lsd:px-2 lsd:text-xs lsd:font-medium lsd:outline-hidden lsd:transition-[margin,opacity] lsd:duration-200 lsd:ease-linear lsd:focus-visible:ring-2 lsd:[&>svg]:size-4 lsd:[&>svg]:shrink-0',
        'lsd:group-data-[collapsible=icon]:-mt-8 lsd:group-data-[collapsible=icon]:opacity-0',
        className,
      )}
      {...props}
    />
  );
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        'lsd:text-sidebar-foreground ring-sidebar-ring lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground lsd:absolute lsd:top-3.5 lsd:right-3 lsd:flex lsd:aspect-square lsd:w-5 lsd:items-center lsd:justify-center lsd:rounded-md lsd:p-0 lsd:outline-hidden lsd:transition-transform lsd:focus-visible:ring-2 lsd:[&>svg]:size-4 lsd:[&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:lsd:absolute after:lsd:-inset-2 md:after:lsd:hidden',
        'lsd:group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  );
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn('lsd:w-full lsd:text-sm', className)}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
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

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('lsd:group/menu-item lsd:relative', className)}
      {...props}
    />
  );
}

const sidebarMenuButtonVariants = cva(
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

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) {
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

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) {
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

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<'div'>) {
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

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<'div'> & {
  showIcon?: boolean;
}) {
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
        <Skeleton
          className="lsd:size-4 lsd:rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="lsd:h-4 lsd:max-w-(--skeleton-width) lsd:flex-1"
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

function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>) {
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

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn('lsd:group/menu-sub-item lsd:relative', className)}
      {...props}
    />
  );
}

function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
}) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'lsd:text-sidebar-foreground ring-sidebar-ring lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground lsd:active:bg-sidebar-accent lsd:active:text-sidebar-accent-foreground lsd:[&>svg]:text-sidebar-accent-foreground lsd:flex lsd:h-7 lsd:min-w-0 lsd:-translate-x-px lsd:items-center lsd:gap-2 lsd:overflow-hidden lsd:rounded-md lsd:px-2 lsd:outline-hidden lsd:focus-visible:ring-2 lsd:disabled:pointer-events-none lsd:disabled:opacity-50 aria-lsd:disabled:pointer-events-none aria-lsd:disabled:opacity-50 lsd:[&>span:last-child]:truncate lsd:[&>svg]:size-4 lsd:[&>svg]:shrink-0',
        'lsd:data-[active=true]:bg-sidebar-accent lsd:data-[active=true]:text-sidebar-accent-foreground',
        size === 'sm' && 'lsd:text-xs',
        size === 'md' && 'lsd:text-sm',
        'lsd:group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
