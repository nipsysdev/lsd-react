import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Badge, badgeVariants } from './badge';

describe('Badge', () => {
  it('renders without crashing', () => {
    render(<Badge>Badge</Badge>);
    expect(screen.getByText('Badge')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toHaveAttribute(
      'data-slot',
      'badge',
    );
  });

  it('applies filled variant classes correctly', () => {
    render(<Badge variant="filled">Filled</Badge>);
    const badge = screen.getByText('Filled');
    expect(badge).toHaveClass('lsd:bg-lsd-primary');
    expect(badge).toHaveClass('lsd:text-lsd-surface-primary');
  });

  it('applies outlined variant classes correctly', () => {
    render(<Badge variant="outlined">Outlined</Badge>);
    const badge = screen.getByText('Outlined');
    expect(badge).toHaveClass('lsd:bg-transparent');
    expect(badge).toHaveClass('lsd:text-lsd-text-primary');
  });

  it('applies default size classes correctly', () => {
    render(<Badge size="default">Default</Badge>);
    const badge = screen.getByText('Default');
    expect(badge).toHaveClass('lsd:h-[28px]');
    expect(badge).toHaveClass('lsd:px-[11px]');
    expect(badge).toHaveClass('lsd:py-[3px]');
    expect(badge).toHaveClass('lsd:text-[0.875rem]');
  });

  it('applies small size classes correctly', () => {
    render(<Badge size="sm">Small</Badge>);
    const badge = screen.getByText('Small');
    expect(badge).toHaveClass('lsd:h-[24px]');
    expect(badge).toHaveClass('lsd:px-[7px]');
    expect(badge).toHaveClass('lsd:text-[0.75rem]');
  });

  it('uses default variant when not specified', () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText('Default');
    expect(badge).toHaveClass('lsd:bg-lsd-primary');
  });

  it('uses default size when not specified', () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText('Default');
    expect(badge).toHaveClass('lsd:h-[28px]');
  });

  it('merges custom className with component classes', () => {
    render(<Badge className="custom-class">Custom</Badge>);
    const badge = screen.getByText('Custom');
    expect(badge).toHaveClass('custom-class');
  });

  it('applies base classes correctly', () => {
    render(<Badge>Base</Badge>);
    const badge = screen.getByText('Base');
    expect(badge).toHaveClass('lsd:inline-flex');
    expect(badge).toHaveClass('lsd:items-center');
    expect(badge).toHaveClass('lsd:justify-center');
    expect(badge).toHaveClass('lsd:border');
    expect(badge).toHaveClass('lsd:rounded-[20px]');
    expect(badge).toHaveClass('lsd:w-fit');
    expect(badge).toHaveClass('lsd:whitespace-nowrap');
    expect(badge).toHaveClass('lsd:shrink-0');
    expect(badge).toHaveClass('lsd:cursor-pointer');
    expect(badge).toHaveClass('lsd:transition-colors');
  });

  it('passes through additional props', () => {
    render(
      <Badge data-testid="test-badge" id="badge-1">
        Badge
      </Badge>,
    );
    const badge = screen.getByText('Badge');
    expect(badge).toHaveAttribute('data-testid', 'test-badge');
    expect(badge).toHaveAttribute('id', 'badge-1');
  });

  it('renders as span by default', () => {
    render(<Badge>Badge</Badge>);
    expect(screen.getByText('Badge').tagName).toBe('SPAN');
  });

  it('applies data-slot attribute', () => {
    render(<Badge>Badge</Badge>);
    expect(screen.getByText('Badge')).toHaveAttribute('data-slot', 'badge');
  });
});

describe('badgeVariants', () => {
  it('returns correct classes for filled variant', () => {
    expect(badgeVariants({ variant: 'filled' })).toContain(
      'lsd:bg-lsd-primary',
    );
    expect(badgeVariants({ variant: 'filled' })).toContain(
      'lsd:text-lsd-surface-primary',
    );
  });

  it('returns correct classes for outlined variant', () => {
    expect(badgeVariants({ variant: 'outlined' })).toContain(
      'lsd:bg-transparent',
    );
    expect(badgeVariants({ variant: 'outlined' })).toContain(
      'lsd:text-lsd-text-primary',
    );
  });

  it('returns correct classes for default size', () => {
    expect(badgeVariants({ size: 'default' })).toContain('lsd:h-[28px]');
    expect(badgeVariants({ size: 'default' })).toContain('lsd:px-[11px]');
    expect(badgeVariants({ size: 'default' })).toContain('lsd:text-[0.875rem]');
  });

  it('returns correct classes for small size', () => {
    expect(badgeVariants({ size: 'sm' })).toContain('lsd:h-[24px]');
    expect(badgeVariants({ size: 'sm' })).toContain('lsd:px-[7px]');
    expect(badgeVariants({ size: 'sm' })).toContain('lsd:text-[0.75rem]');
  });

  it('uses default variant when not specified', () => {
    expect(badgeVariants({})).toContain('lsd:bg-lsd-primary');
  });

  it('uses default size when not specified', () => {
    expect(badgeVariants({})).toContain('lsd:h-[28px]');
  });

  it('combines variant and size correctly', () => {
    const classes = badgeVariants({ variant: 'outlined', size: 'sm' });
    expect(classes).toContain('lsd:bg-transparent');
    expect(classes).toContain('lsd:h-[24px]');
  });
});
