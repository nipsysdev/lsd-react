import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  tabsListVariants,
  tabsTriggerVariants,
  tabsVariants,
} from './tabs';

describe('Tabs', () => {
  it('renders without crashing', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
        <TabsContent value="tab-2">Content 2</TabsContent>
      </Tabs>,
    );
    expect(document.querySelector('[data-slot="tabs"]')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const tabs = document.querySelector('[data-slot="tabs"]');
    expect(tabs).toHaveAttribute('data-slot', 'tabs');
  });

  it('passes through additional props', () => {
    render(
      <Tabs defaultValue="tab-1" data-testid="test-tabs" id="tabs-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const tabs = document.querySelector('[data-slot="tabs"]');
    expect(tabs).toHaveAttribute('data-testid', 'test-tabs');
    expect(tabs).toHaveAttribute('id', 'tabs-1');
  });

  it('merges custom className with component classes', () => {
    render(
      <Tabs defaultValue="tab-1" className="custom-tabs-class">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const tabs = document.querySelector('[data-slot="tabs"]');
    expect(tabs).toHaveClass('custom-tabs-class');
  });
});

describe('TabsList', () => {
  it('renders without crashing', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    expect(
      document.querySelector('[data-slot="tabs-list"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveAttribute('data-slot', 'tabs-list');
  });

  it('applies base classes correctly', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass('lsd:bg-lsd-surface-primary');
    expect(list).toHaveClass('lsd:border-b');
    expect(list).toHaveClass('lsd:border-lsd-border');
    expect(list).toHaveClass('lsd:flex');
    expect(list).toHaveClass('lsd:flex-row');
  });

  it('applies default size classes (lg)', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass('lsd:h-12');
  });

  it('applies small size classes when size="sm"', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList size="sm">
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass('lsd:h-8');
  });

  it('applies medium size classes when size="md"', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList size="md">
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass('lsd:h-10');
  });

  it('applies default fullWidth classes (false)', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass('lsd:w-fit');
  });

  it('applies fullWidth classes when fullWidth={true}', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList fullWidth>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass('lsd:w-full');
  });

  it('merges custom className with component classes', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList className="custom-list-class">
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass('custom-list-class');
  });

  it('passes through additional props', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList data-testid="test-list" id="list-1">
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveAttribute('data-testid', 'test-list');
    expect(list).toHaveAttribute('id', 'list-1');
  });
});

describe('TabsTrigger', () => {
  it('renders without crashing', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const trigger = document.querySelector('[data-slot="tabs-trigger"]');
    expect(trigger).toHaveAttribute('data-slot', 'tabs-trigger');
  });

  it('applies base classes correctly', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const trigger = document.querySelector('[data-slot="tabs-trigger"]');
    expect(trigger).toHaveClass('lsd:text-lsd-text');
    expect(trigger).toHaveClass('lsd:border');
    expect(trigger).toHaveClass('lsd:border-transparent');
    expect(trigger).toHaveClass('lsd:border-b-0');
    expect(trigger).toHaveClass('lsd:flex');
    expect(trigger).toHaveClass('lsd:items-center');
    expect(trigger).toHaveClass('lsd:justify-center');
  });

  it('applies active state classes when selected', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
        <TabsContent value="tab-2">Content 2</TabsContent>
      </Tabs>,
    );
    const trigger = screen.getByRole('tab', { name: 'Tab 1' });
    expect(trigger).toHaveAttribute('data-state', 'active');
    expect(trigger).toHaveClass('lsd:data-[state=active]:border-lsd-text');
    expect(trigger).toHaveClass(
      'lsd:data-[state=active]:bg-lsd-surface-primary',
    );
    expect(trigger).toHaveClass('lsd:data-[state=active]:font-medium');
  });

  it('applies default size classes (lg)', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const trigger = document.querySelector('[data-slot="tabs-trigger"]');
    expect(trigger).toHaveClass('lsd:px-5');
    expect(trigger).toHaveClass('lsd:py-2.5');
    expect(trigger).toHaveClass('lsd:text-lg');
  });

  it('applies small size classes when size="sm"', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1" size="sm">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const trigger = document.querySelector('[data-slot="tabs-trigger"]');
    expect(trigger).toHaveClass('lsd:px-3');
    expect(trigger).toHaveClass('lsd:py-1.5');
    expect(trigger).toHaveClass('lsd:text-sm');
  });

  it('applies medium size classes when size="md"', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1" size="md">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const trigger = document.querySelector('[data-slot="tabs-trigger"]');
    expect(trigger).toHaveClass('lsd:px-4');
    expect(trigger).toHaveClass('lsd:py-2');
    expect(trigger).toHaveClass('lsd:text-base');
  });

  it('applies default fullWidth classes (false)', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const trigger = document.querySelector('[data-slot="tabs-trigger"]');
    expect(trigger).not.toHaveClass('lsd:flex-1');
  });

  it('applies fullWidth classes when fullWidth={true}', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1" fullWidth>
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const trigger = document.querySelector('[data-slot="tabs-trigger"]');
    expect(trigger).toHaveClass('lsd:flex-1');
  });

  it('merges custom className with component classes', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1" className="custom-trigger-class">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const trigger = document.querySelector('[data-slot="tabs-trigger"]');
    expect(trigger).toHaveClass('custom-trigger-class');
  });

  it('passes through additional props', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1" data-testid="test-trigger" id="trigger-1">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const trigger = document.querySelector('[data-slot="tabs-trigger"]');
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });

  it('applies disabled state classes', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2" disabled>
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const trigger = screen.getByRole('tab', { name: 'Tab 2' });
    expect(trigger).toHaveClass('lsd:disabled:opacity-34');
    expect(trigger).toHaveClass('lsd:disabled:pointer-events-none');
  });
});

describe('TabsContent', () => {
  it('renders without crashing', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const content = document.querySelector('[data-slot="tabs-content"]');
    expect(content).toHaveAttribute('data-slot', 'tabs-content');
  });

  it('applies base classes correctly', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const content = document.querySelector('[data-slot="tabs-content"]');
    expect(content).toHaveClass('lsd:outline-none');
  });

  it('merges custom className with component classes', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1" className="custom-content-class">
          Content 1
        </TabsContent>
      </Tabs>,
    );
    const content = document.querySelector('[data-slot="tabs-content"]');
    expect(content).toHaveClass('custom-content-class');
  });

  it('passes through additional props', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1" data-testid="test-content" id="content-1">
          Content 1
        </TabsContent>
      </Tabs>,
    );
    const content = document.querySelector('[data-slot="tabs-content"]');
    expect(content).toHaveAttribute('data-testid', 'test-content');
    expect(content).toHaveAttribute('id', 'content-1');
  });

  it('renders children correctly', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">
          <p>Custom content</p>
          <button type="button">Action</button>
        </TabsContent>
      </Tabs>,
    );
    expect(screen.getByText('Custom content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });
});

describe('tabsVariants', () => {
  it('returns correct classes for default variants', () => {
    const result = tabsVariants();
    expect(result).toBe('');
  });

  it('returns correct classes for size variants', () => {
    const sm = tabsVariants({ size: 'sm' });
    const md = tabsVariants({ size: 'md' });
    const lg = tabsVariants({ size: 'lg' });

    expect(sm).toBe('');
    expect(md).toBe('');
    expect(lg).toBe('');
  });

  it('returns correct classes for fullWidth variants', () => {
    const fullWidth = tabsVariants({ fullWidth: true });
    const notFullWidth = tabsVariants({ fullWidth: false });

    expect(fullWidth).toBe('');
    expect(notFullWidth).toBe('');
  });
});

describe('tabsListVariants', () => {
  it('returns correct classes for default variants', () => {
    const result = tabsListVariants();
    expect(result).toContain('lsd:bg-lsd-surface-primary');
    expect(result).toContain('lsd:border-b');
    expect(result).toContain('lsd:border-lsd-border');
    expect(result).toContain('lsd:flex');
    expect(result).toContain('lsd:flex-row');
    expect(result).toContain('lsd:h-12');
    expect(result).toContain('lsd:w-fit');
  });

  it('returns correct classes for size variants', () => {
    const sm = tabsListVariants({ size: 'sm' });
    const md = tabsListVariants({ size: 'md' });
    const lg = tabsListVariants({ size: 'lg' });

    expect(sm).toContain('lsd:h-8');
    expect(md).toContain('lsd:h-10');
    expect(lg).toContain('lsd:h-12');
  });

  it('returns correct classes for fullWidth variants', () => {
    const fullWidth = tabsListVariants({ fullWidth: true });
    const notFullWidth = tabsListVariants({ fullWidth: false });

    expect(fullWidth).toContain('lsd:w-full');
    expect(notFullWidth).toContain('lsd:w-fit');
  });
});

describe('tabsTriggerVariants', () => {
  it('returns correct classes for default variants', () => {
    const result = tabsTriggerVariants();
    expect(result).toContain('lsd:text-lsd-text');
    expect(result).toContain('lsd:border');
    expect(result).toContain('lsd:border-transparent');
    expect(result).toContain('lsd:border-b-0');
    expect(result).toContain('lsd:flex');
    expect(result).toContain('lsd:items-center');
    expect(result).toContain('lsd:justify-center');
    expect(result).toContain('lsd:px-5');
    expect(result).toContain('lsd:py-2.5');
    expect(result).toContain('lsd:text-lg');
  });

  it('returns correct classes for size variants', () => {
    const sm = tabsTriggerVariants({ size: 'sm' });
    const md = tabsTriggerVariants({ size: 'md' });
    const lg = tabsTriggerVariants({ size: 'lg' });

    expect(sm).toContain('lsd:px-3');
    expect(sm).toContain('lsd:py-1.5');
    expect(sm).toContain('lsd:text-sm');

    expect(md).toContain('lsd:px-4');
    expect(md).toContain('lsd:py-2');
    expect(md).toContain('lsd:text-base');

    expect(lg).toContain('lsd:px-5');
    expect(lg).toContain('lsd:py-2.5');
    expect(lg).toContain('lsd:text-lg');
  });

  it('returns correct classes for fullWidth variants', () => {
    const fullWidth = tabsTriggerVariants({ fullWidth: true });
    const notFullWidth = tabsTriggerVariants({ fullWidth: false });

    expect(fullWidth).toContain('lsd:flex-1');
    expect(notFullWidth).not.toContain('lsd:flex-1');
  });
});
