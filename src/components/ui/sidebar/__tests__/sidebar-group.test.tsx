import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SidebarGroup } from '../index';

describe('SidebarGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarGroup>Group</SidebarGroup>);
    expect(
      container.querySelector('[data-slot="sidebar-group"]'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarGroup className="custom-class">Group</SidebarGroup>,
    );
    expect(container.querySelector('[data-slot="sidebar-group"]')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarGroup>Group</SidebarGroup>);
    const group = container.querySelector('[data-slot="sidebar-group"]');
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
