import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../index';

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
    expect(trigger).toHaveClass('lsd:text-lsd-text-primary');
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
    expect(trigger).toHaveClass(
      'lsd:data-[state=active]:border-lsd-text-primary',
    );
    expect(trigger).toHaveClass('lsd:data-[state=active]:bg-lsd-surface');
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
