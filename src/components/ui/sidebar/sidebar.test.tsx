import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
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
} from './index';

// Mock useIsMobile hook
vi.mock('@/hooks/use-mobile', () => ({
  useIsMobile: vi.fn(() => false),
}));

// Helper function to query by data-slot
const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe('SidebarProvider', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(
      <SidebarProvider>
        <div>Content</div>
      </SidebarProvider>,
    );
    expect(queryByDataSlot(container, 'sidebar-wrapper')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <SidebarProvider className="custom-class">
        <div>Content</div>
      </SidebarProvider>,
    );
    expect(queryByDataSlot(container, 'sidebar-wrapper')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(
      <SidebarProvider>
        <div>Content</div>
      </SidebarProvider>,
    );
    const wrapper = queryByDataSlot(container, 'sidebar-wrapper');
    expect(wrapper).toHaveClass('lsd:group/sidebar-wrapper');
    expect(wrapper).toHaveClass('lsd:flex');
    expect(wrapper).toHaveClass('lsd:min-h-svh');
    expect(wrapper).toHaveClass('lsd:w-full');
  });

  it('passes through additional props', () => {
    render(
      <SidebarProvider data-testid="test-provider" data-custom="value">
        <div>Content</div>
      </SidebarProvider>,
    );
    expect(screen.getByTestId('test-provider')).toHaveAttribute(
      'data-custom',
      'value',
    );
  });

  it('renders children', () => {
    render(
      <SidebarProvider>
        <div>Child Content</div>
      </SidebarProvider>,
    );
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });
});

describe('Sidebar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <div>Sidebar Content</div>
        </Sidebar>
      </SidebarProvider>,
    );
    expect(queryByDataSlot(container, 'sidebar')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar className="custom-class">
          <div>Sidebar Content</div>
        </Sidebar>
      </SidebarProvider>,
    );
    // The className is applied to the sidebar-container div, not the sidebar element
    expect(queryByDataSlot(container, 'sidebar-container')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <div>Sidebar Content</div>
        </Sidebar>
      </SidebarProvider>,
    );
    const sidebar = queryByDataSlot(container, 'sidebar');
    expect(sidebar).toHaveClass('lsd:group');
    expect(sidebar).toHaveClass('lsd:peer');
    expect(sidebar).toHaveClass('lsd:text-sidebar-foreground');
  });

  it('renders children', () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <div>Sidebar Content</div>
        </Sidebar>
      </SidebarProvider>,
    );
    expect(screen.getByText('Sidebar Content')).toBeInTheDocument();
  });
});

describe('SidebarTrigger', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(
      <SidebarProvider>
        <SidebarTrigger />
      </SidebarProvider>,
    );
    expect(queryByDataSlot(container, 'sidebar-trigger')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarProvider>
        <SidebarTrigger className="custom-class" />
      </SidebarProvider>,
    );
    expect(queryByDataSlot(container, 'sidebar-trigger')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(
      <SidebarProvider>
        <SidebarTrigger />
      </SidebarProvider>,
    );
    const trigger = queryByDataSlot(container, 'sidebar-trigger');
    expect(trigger).toHaveClass('lsd:size-7');
  });

  it('renders PanelLeftIcon', () => {
    render(
      <SidebarProvider>
        <SidebarTrigger />
      </SidebarProvider>,
    );
    expect(screen.getByText('Toggle Sidebar')).toBeInTheDocument();
  });
});

describe('SidebarRail', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(
      <SidebarProvider>
        <SidebarRail />
      </SidebarProvider>,
    );
    expect(queryByDataSlot(container, 'sidebar-rail')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarProvider>
        <SidebarRail className="custom-class" />
      </SidebarProvider>,
    );
    expect(queryByDataSlot(container, 'sidebar-rail')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(
      <SidebarProvider>
        <SidebarRail />
      </SidebarProvider>,
    );
    const rail = queryByDataSlot(container, 'sidebar-rail');
    expect(rail).toHaveClass('lsd:absolute');
    expect(rail).toHaveClass('lsd:inset-y-0');
    expect(rail).toHaveClass('lsd:z-20');
  });

  it('has correct aria-label', () => {
    render(
      <SidebarProvider>
        <SidebarRail />
      </SidebarProvider>,
    );
    expect(screen.getByLabelText('Toggle Sidebar')).toBeInTheDocument();
  });
});

describe('SidebarInset', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarInset>Content</SidebarInset>);
    expect(queryByDataSlot(container, 'sidebar-inset')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarInset className="custom-class">Content</SidebarInset>,
    );
    expect(queryByDataSlot(container, 'sidebar-inset')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarInset>Content</SidebarInset>);
    const inset = queryByDataSlot(container, 'sidebar-inset');
    expect(inset).toHaveClass('lsd:bg-background');
    expect(inset).toHaveClass('lsd:relative');
    expect(inset).toHaveClass('lsd:flex');
    expect(inset).toHaveClass('lsd:w-full');
  });

  it('renders children', () => {
    render(<SidebarInset>Inset Content</SidebarInset>);
    expect(screen.getByText('Inset Content')).toBeInTheDocument();
  });
});

describe('SidebarInput', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarInput />);
    expect(queryByDataSlot(container, 'sidebar-input')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<SidebarInput className="custom-class" />);
    // The Input component applies className to the outer wrapper div
    // The data-slot is on the input element, so we need to find the outer wrapper div
    const input = queryByDataSlot(container, 'sidebar-input');
    const outerWrapper = input?.parentElement?.parentElement;
    expect(outerWrapper).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarInput />);
    const input = queryByDataSlot(container, 'sidebar-input');
    const outerWrapper = input?.parentElement?.parentElement;
    // The Input component applies classes to the outer wrapper div
    expect(outerWrapper).toHaveClass('lsd:bg-background');
    expect(outerWrapper).toHaveClass('lsd:h-8');
    expect(outerWrapper).toHaveClass('lsd:w-full');
    expect(outerWrapper).toHaveClass('lsd:shadow-none');
  });

  it('passes through additional props', () => {
    render(<SidebarInput placeholder="Search..." />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });
});

describe('SidebarHeader', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarHeader>Header</SidebarHeader>);
    expect(queryByDataSlot(container, 'sidebar-header')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarHeader className="custom-class">Header</SidebarHeader>,
    );
    expect(queryByDataSlot(container, 'sidebar-header')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarHeader>Header</SidebarHeader>);
    const header = queryByDataSlot(container, 'sidebar-header');
    expect(header).toHaveClass('lsd:flex');
    expect(header).toHaveClass('lsd:flex-col');
    expect(header).toHaveClass('lsd:gap-2');
    expect(header).toHaveClass('lsd:p-2');
  });

  it('renders children', () => {
    render(<SidebarHeader>Header Content</SidebarHeader>);
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });
});

describe('SidebarFooter', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarFooter>Footer</SidebarFooter>);
    expect(queryByDataSlot(container, 'sidebar-footer')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarFooter className="custom-class">Footer</SidebarFooter>,
    );
    expect(queryByDataSlot(container, 'sidebar-footer')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarFooter>Footer</SidebarFooter>);
    const footer = queryByDataSlot(container, 'sidebar-footer');
    expect(footer).toHaveClass('lsd:flex');
    expect(footer).toHaveClass('lsd:flex-col');
    expect(footer).toHaveClass('lsd:gap-2');
    expect(footer).toHaveClass('lsd:p-2');
  });

  it('renders children', () => {
    render(<SidebarFooter>Footer Content</SidebarFooter>);
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });
});

describe('SidebarSeparator', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarSeparator />);
    expect(queryByDataSlot(container, 'sidebar-separator')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<SidebarSeparator className="custom-class" />);
    expect(queryByDataSlot(container, 'sidebar-separator')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarSeparator />);
    const separator = queryByDataSlot(container, 'sidebar-separator');
    expect(separator).toHaveClass('lsd:bg-sidebar-border');
    expect(separator).toHaveClass('lsd:mx-2');
    expect(separator).toHaveClass('lsd:w-auto');
  });
});

describe('SidebarContent', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarContent>Content</SidebarContent>);
    expect(queryByDataSlot(container, 'sidebar-content')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarContent className="custom-class">Content</SidebarContent>,
    );
    expect(queryByDataSlot(container, 'sidebar-content')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarContent>Content</SidebarContent>);
    const content = queryByDataSlot(container, 'sidebar-content');
    expect(content).toHaveClass('lsd:flex');
    expect(content).toHaveClass('lsd:min-h-0');
    expect(content).toHaveClass('lsd:flex-1');
    expect(content).toHaveClass('lsd:flex-col');
  });

  it('renders children', () => {
    render(<SidebarContent>Content Area</SidebarContent>);
    expect(screen.getByText('Content Area')).toBeInTheDocument();
  });
});

describe('SidebarGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarGroup>Group</SidebarGroup>);
    expect(queryByDataSlot(container, 'sidebar-group')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarGroup className="custom-class">Group</SidebarGroup>,
    );
    expect(queryByDataSlot(container, 'sidebar-group')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarGroup>Group</SidebarGroup>);
    const group = queryByDataSlot(container, 'sidebar-group');
    expect(group).toHaveClass('lsd:relative');
    expect(group).toHaveClass('lsd:flex');
    expect(group).toHaveClass('lsd:w-full');
    expect(group).toHaveClass('lsd:min-w-0');
  });

  it('renders children', () => {
    render(<SidebarGroup>Group Content</SidebarGroup>);
    expect(screen.getByText('Group Content')).toBeInTheDocument();
  });
});

describe('SidebarGroupLabel', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarGroupLabel>Label</SidebarGroupLabel>);
    expect(
      queryByDataSlot(container, 'sidebar-group-label'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarGroupLabel className="custom-class">Label</SidebarGroupLabel>,
    );
    expect(queryByDataSlot(container, 'sidebar-group-label')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarGroupLabel>Label</SidebarGroupLabel>);
    const label = queryByDataSlot(container, 'sidebar-group-label');
    expect(label).toHaveClass('lsd:text-sidebar-foreground/70');
    expect(label).toHaveClass('lsd:flex');
    expect(label).toHaveClass('lsd:h-8');
  });

  it('renders children', () => {
    render(<SidebarGroupLabel>Group Label</SidebarGroupLabel>);
    expect(screen.getByText('Group Label')).toBeInTheDocument();
  });
});

describe('SidebarGroupAction', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <SidebarGroupAction>Action</SidebarGroupAction>,
    );
    expect(
      queryByDataSlot(container, 'sidebar-group-action'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarGroupAction className="custom-class">Action</SidebarGroupAction>,
    );
    expect(queryByDataSlot(container, 'sidebar-group-action')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(
      <SidebarGroupAction>Action</SidebarGroupAction>,
    );
    const action = queryByDataSlot(container, 'sidebar-group-action');
    expect(action).toHaveClass('lsd:text-sidebar-foreground');
    expect(action).toHaveClass('lsd:absolute');
    expect(action).toHaveClass('lsd:top-3.5');
    expect(action).toHaveClass('lsd:right-3');
  });
});

describe('SidebarGroupContent', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <SidebarGroupContent>Content</SidebarGroupContent>,
    );
    expect(
      queryByDataSlot(container, 'sidebar-group-content'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarGroupContent className="custom-class">
        Content
      </SidebarGroupContent>,
    );
    expect(queryByDataSlot(container, 'sidebar-group-content')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(
      <SidebarGroupContent>Content</SidebarGroupContent>,
    );
    const content = queryByDataSlot(container, 'sidebar-group-content');
    expect(content).toHaveClass('lsd:w-full');
    expect(content).toHaveClass('lsd:text-sm');
  });

  it('renders children', () => {
    render(<SidebarGroupContent>Group Content</SidebarGroupContent>);
    expect(screen.getByText('Group Content')).toBeInTheDocument();
  });
});

describe('SidebarMenu', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarMenu>Menu</SidebarMenu>);
    expect(queryByDataSlot(container, 'sidebar-menu')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarMenu className="custom-class">Menu</SidebarMenu>,
    );
    expect(queryByDataSlot(container, 'sidebar-menu')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarMenu>Menu</SidebarMenu>);
    const menu = queryByDataSlot(container, 'sidebar-menu');
    expect(menu).toHaveClass('lsd:flex');
    expect(menu).toHaveClass('lsd:w-full');
    expect(menu).toHaveClass('lsd:min-w-0');
  });

  it('renders children', () => {
    render(<SidebarMenu>Menu Content</SidebarMenu>);
    expect(screen.getByText('Menu Content')).toBeInTheDocument();
  });
});

describe('SidebarMenuItem', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarMenuItem>Item</SidebarMenuItem>);
    expect(queryByDataSlot(container, 'sidebar-menu-item')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarMenuItem className="custom-class">Item</SidebarMenuItem>,
    );
    expect(queryByDataSlot(container, 'sidebar-menu-item')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarMenuItem>Item</SidebarMenuItem>);
    const item = queryByDataSlot(container, 'sidebar-menu-item');
    expect(item).toHaveClass('lsd:group/menu-item');
    expect(item).toHaveClass('lsd:relative');
  });

  it('renders children', () => {
    render(<SidebarMenuItem>Menu Item</SidebarMenuItem>);
    expect(screen.getByText('Menu Item')).toBeInTheDocument();
  });
});

describe('SidebarMenuButton', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Button</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
      </SidebarProvider>,
    );
    expect(
      queryByDataSlot(container, 'sidebar-menu-button'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="custom-class">
                Button
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
      </SidebarProvider>,
    );
    expect(queryByDataSlot(container, 'sidebar-menu-button')).toHaveClass(
      'custom-class',
    );
  });

  it('renders children', () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Menu Button</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
      </SidebarProvider>,
    );
    expect(screen.getByText('Menu Button')).toBeInTheDocument();
  });
});

describe('SidebarMenuAction', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Button</SidebarMenuButton>
              <SidebarMenuAction>Action</SidebarMenuAction>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
      </SidebarProvider>,
    );
    expect(
      queryByDataSlot(container, 'sidebar-menu-action'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Button</SidebarMenuButton>
              <SidebarMenuAction className="custom-class">
                Action
              </SidebarMenuAction>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
      </SidebarProvider>,
    );
    expect(queryByDataSlot(container, 'sidebar-menu-action')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Button</SidebarMenuButton>
              <SidebarMenuAction>Action</SidebarMenuAction>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
      </SidebarProvider>,
    );
    const action = queryByDataSlot(container, 'sidebar-menu-action');
    expect(action).toHaveClass('lsd:text-sidebar-foreground');
    expect(action).toHaveClass('lsd:absolute');
    expect(action).toHaveClass('lsd:top-1.5');
    expect(action).toHaveClass('lsd:right-1');
  });
});

describe('SidebarMenuBadge', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Button</SidebarMenuButton>
              <SidebarMenuBadge>Badge</SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
      </SidebarProvider>,
    );
    expect(
      queryByDataSlot(container, 'sidebar-menu-badge'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Button</SidebarMenuButton>
              <SidebarMenuBadge className="custom-class">
                Badge
              </SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
      </SidebarProvider>,
    );
    expect(queryByDataSlot(container, 'sidebar-menu-badge')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Button</SidebarMenuButton>
              <SidebarMenuBadge>Badge</SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
      </SidebarProvider>,
    );
    const badge = queryByDataSlot(container, 'sidebar-menu-badge');
    expect(badge).toHaveClass('lsd:text-sidebar-foreground');
    expect(badge).toHaveClass('lsd:pointer-events-none');
    expect(badge).toHaveClass('lsd:absolute');
    expect(badge).toHaveClass('lsd:right-1');
  });

  it('renders children', () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Button</SidebarMenuButton>
              <SidebarMenuBadge>Badge Content</SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
      </SidebarProvider>,
    );
    expect(screen.getByText('Badge Content')).toBeInTheDocument();
  });
});

describe('SidebarMenuSkeleton', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarMenuSkeleton />);
    expect(
      queryByDataSlot(container, 'sidebar-menu-skeleton'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarMenuSkeleton className="custom-class" />,
    );
    expect(queryByDataSlot(container, 'sidebar-menu-skeleton')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarMenuSkeleton />);
    const skeleton = queryByDataSlot(container, 'sidebar-menu-skeleton');
    expect(skeleton).toHaveClass('lsd:flex');
    expect(skeleton).toHaveClass('lsd:h-8');
    expect(skeleton).toHaveClass('lsd:items-center');
  });

  it('renders icon when showIcon is true', () => {
    const { container } = render(<SidebarMenuSkeleton showIcon />);
    // The icon is rendered inside a Skeleton component
    const skeleton = queryByDataSlot(container, 'sidebar-menu-skeleton');
    expect(skeleton).toBeInTheDocument();
    // Check that the skeleton has the icon child
    expect(
      skeleton?.querySelector('[data-sidebar="menu-skeleton-icon"]'),
    ).toBeInTheDocument();
  });
});

describe('SidebarMenuSub', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarMenuSub>Sub</SidebarMenuSub>);
    expect(queryByDataSlot(container, 'sidebar-menu-sub')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarMenuSub className="custom-class">Sub</SidebarMenuSub>,
    );
    expect(queryByDataSlot(container, 'sidebar-menu-sub')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarMenuSub>Sub</SidebarMenuSub>);
    const sub = queryByDataSlot(container, 'sidebar-menu-sub');
    expect(sub).toHaveClass('border-sidebar-border');
    expect(sub).toHaveClass('lsd:mx-3.5');
    expect(sub).toHaveClass('lsd:flex');
    expect(sub).toHaveClass('lsd:min-w-0');
  });

  it('renders children', () => {
    render(<SidebarMenuSub>Sub Content</SidebarMenuSub>);
    expect(screen.getByText('Sub Content')).toBeInTheDocument();
  });
});

describe('SidebarMenuSubItem', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <SidebarMenuSubItem>SubItem</SidebarMenuSubItem>,
    );
    expect(
      queryByDataSlot(container, 'sidebar-menu-sub-item'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarMenuSubItem className="custom-class">SubItem</SidebarMenuSubItem>,
    );
    expect(queryByDataSlot(container, 'sidebar-menu-sub-item')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(
      <SidebarMenuSubItem>SubItem</SidebarMenuSubItem>,
    );
    const subItem = queryByDataSlot(container, 'sidebar-menu-sub-item');
    expect(subItem).toHaveClass('lsd:group/menu-sub-item');
    expect(subItem).toHaveClass('lsd:relative');
  });

  it('renders children', () => {
    render(<SidebarMenuSubItem>Sub Item Content</SidebarMenuSubItem>);
    expect(screen.getByText('Sub Item Content')).toBeInTheDocument();
  });
});

describe('SidebarMenuSubButton', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <SidebarMenuSubButton>SubButton</SidebarMenuSubButton>,
    );
    expect(
      queryByDataSlot(container, 'sidebar-menu-sub-button'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarMenuSubButton className="custom-class">
        SubButton
      </SidebarMenuSubButton>,
    );
    expect(queryByDataSlot(container, 'sidebar-menu-sub-button')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(
      <SidebarMenuSubButton>SubButton</SidebarMenuSubButton>,
    );
    const subButton = queryByDataSlot(container, 'sidebar-menu-sub-button');
    expect(subButton).toHaveClass('lsd:text-sidebar-foreground');
    expect(subButton).toHaveClass('lsd:flex');
    expect(subButton).toHaveClass('lsd:h-7');
  });

  it('renders children', () => {
    render(<SidebarMenuSubButton>Sub Button Content</SidebarMenuSubButton>);
    expect(screen.getByText('Sub Button Content')).toBeInTheDocument();
  });
});

describe('useSidebar', () => {
  it('throws error when used outside SidebarProvider', () => {
    expect(() => {
      const TestComponent = () => {
        useSidebar();
        return null;
      };
      render(<TestComponent />);
    }).toThrow('useSidebar must be used within a SidebarProvider.');
  });
});
