import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SidebarMenu } from '../index';

describe('SidebarMenu', () => {
  it('renders without crashing', () => {
    const { container } = render(<SidebarMenu>Menu</SidebarMenu>);
    expect(
      container.querySelector('[data-slot="sidebar-menu"]'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <SidebarMenu className="custom-class">Menu</SidebarMenu>,
    );
    expect(container.querySelector('[data-slot="sidebar-menu"]')).toHaveClass(
      'custom-class',
    );
  });

  it('applies default classes', () => {
    const { container } = render(<SidebarMenu>Menu</SidebarMenu>);
    const menu = container.querySelector('[data-slot="sidebar-menu"]');
    expect(menu).toHaveClass('lsd:flex');
    expect(menu).toHaveClass('lsd:w-full');
    expect(menu).toHaveClass('lsd:min-w-0');
  });

  it('renders children', () => {
    render(<SidebarMenu>Menu Content</SidebarMenu>);
    expect(screen.getByText('Menu Content')).toBeInTheDocument();
  });
});
