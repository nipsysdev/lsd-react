import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../index';
import { tabsListVariants, tabsTriggerVariants, tabsVariants } from '../types';

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

  it('renders with all subcomponents', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
        <TabsContent value="tab-2">Content 2</TabsContent>
        <TabsContent value="tab-3">Content 3</TabsContent>
      </Tabs>,
    );
    // Verify tabs is present
    expect(document.querySelector('[data-slot="tabs"]')).toBeInTheDocument();
    // Verify list is present
    expect(
      document.querySelector('[data-slot="tabs-list"]'),
    ).toBeInTheDocument();
    // Verify triggers are present
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument();
    // Verify content is present (only active content is visible)
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(document.querySelectorAll('[data-slot="tabs-content"]').length).toBe(
      3,
    );
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
