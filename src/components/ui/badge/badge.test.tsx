import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Badge, badgeVariants } from './index';

describe('Badge', () => {
  it('renders without crashing', () => {
    render(<Badge>Badge</Badge>);
    expect(screen.getByText('Badge')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
    expect(
      screen.getByText('Test Badge').closest('[data-slot="badge"]'),
    ).toHaveAttribute('data-slot', 'badge');
  });

  it('applies filled variant classes correctly', () => {
    render(
      <Badge variant="filled" data-testid="badge">
        Filled
      </Badge>,
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:bg-lsd-primary');
    expect(badge).toHaveClass('lsd:text-lsd-surface-primary');
  });

  it('applies outlined variant classes correctly', () => {
    render(
      <Badge variant="outlined" data-testid="badge">
        Outlined
      </Badge>,
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:bg-transparent');
    expect(badge).toHaveClass('lsd:text-lsd-text-primary');
  });

  it('applies medium size classes correctly', () => {
    render(
      <Badge size="md" data-testid="badge">
        Medium
      </Badge>,
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:h-[28px]');
    expect(badge).toHaveClass('lsd:px-[11px]');
    expect(badge).toHaveClass('lsd:py-[3px]');
    expect(badge).toHaveClass('lsd:text-[0.875rem]');
  });

  it('applies small size classes correctly', () => {
    render(
      <Badge size="sm" data-testid="badge">
        Small
      </Badge>,
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:h-[24px]');
    expect(badge).toHaveClass('lsd:px-[7px]');
    expect(badge).toHaveClass('lsd:text-[0.75rem]');
  });

  it('uses default variant when not specified', () => {
    render(<Badge data-testid="badge">Default</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:bg-lsd-primary');
  });

  it('uses default size when not specified', () => {
    render(<Badge data-testid="badge">Default</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:h-[28px]');
  });

  it('merges custom className with component classes', () => {
    render(
      <Badge className="custom-class" data-testid="badge">
        Custom
      </Badge>,
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('custom-class');
  });

  it('applies base classes correctly', () => {
    render(<Badge data-testid="badge">Base</Badge>);
    const badge = screen.getByTestId('badge');
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
    const badge = screen.getByTestId('test-badge');
    expect(badge).toHaveAttribute('data-testid', 'test-badge');
    expect(badge).toHaveAttribute('id', 'badge-1');
  });

  it('renders as span by default', () => {
    render(<Badge data-testid="badge">Badge</Badge>);
    expect(screen.getByTestId('badge').tagName).toBe('SPAN');
  });

  it('applies data-slot attribute', () => {
    render(<Badge data-testid="badge">Badge</Badge>);
    expect(screen.getByTestId('badge')).toHaveAttribute('data-slot', 'badge');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Badge onClick={handleClick}>Clickable</Badge>);
    const badge = screen.getByText('Clickable');
    badge.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies button role when clickable', () => {
    render(<Badge onClick={() => {}}>Clickable</Badge>);
    const badge = screen.getByText('Clickable');
    const badgeElement = badge.closest('[data-slot="badge"]');
    expect(badgeElement).toHaveAttribute('role', 'button');
    expect(badgeElement).toHaveAttribute('tabIndex', '0');
  });

  it('handles keyboard events when clickable', () => {
    const handleClick = vi.fn();
    render(<Badge onClick={handleClick}>Clickable</Badge>);
    const badge = screen.getByText('Clickable');
    fireEvent.keyDown(badge, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with icon on the left', () => {
    render(<Badge icon={<span data-testid="icon">★</span>}>With Icon</Badge>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    const badge = screen.getByText('With Icon');
    const badgeElement = badge.closest('[data-slot="badge"]');
    expect(badgeElement).toContainElement(screen.getByTestId('icon'));
  });

  it('renders with icon on the right', () => {
    render(
      <Badge icon={<span data-testid="icon">★</span>} iconPosition="right">
        With Icon
      </Badge>,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    const badge = screen.getByText('With Icon');
    const badgeElement = badge.closest('[data-slot="badge"]');
    expect(badgeElement).toContainElement(screen.getByTestId('icon'));
  });

  it('renders as dot variant', () => {
    render(
      <Badge dot data-testid="badge">
        Dot
      </Badge>,
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:rounded-full');
    expect(badge).toHaveClass('lsd:p-0');
    expect(badge).toHaveClass('lsd:border-0');
  });

  it('applies correct dot size for xs', () => {
    render(<Badge dot size="xs" data-testid="badge" />);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:w-[8px]');
    expect(badge).toHaveClass('lsd:h-[8px]');
  });

  it('applies correct dot size for sm', () => {
    render(<Badge dot size="sm" data-testid="badge" />);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:w-[10px]');
    expect(badge).toHaveClass('lsd:h-[10px]');
  });

  it('applies correct dot size for md', () => {
    render(<Badge dot size="md" data-testid="badge" />);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:w-[12px]');
    expect(badge).toHaveClass('lsd:h-[12px]');
  });

  it('applies correct dot size for lg', () => {
    render(<Badge dot size="lg" data-testid="badge" />);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:w-[14px]');
    expect(badge).toHaveClass('lsd:h-[14px]');
  });

  it('applies correct dot size for xl', () => {
    render(<Badge dot size="xl" data-testid="badge" />);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('lsd:w-[16px]');
    expect(badge).toHaveClass('lsd:h-[16px]');
  });

  it('handles dismiss event', () => {
    const handleDismiss = vi.fn();
    const handleClick = vi.fn();
    render(
      <Badge onDismiss={handleDismiss} onClick={handleClick}>
        Dismissible
      </Badge>,
    );
    const dismissButton = screen.getByLabelText('Dismiss');
    dismissButton.click();
    expect(handleDismiss).toHaveBeenCalledTimes(1);
    expect(handleClick).not.toHaveBeenCalled();
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

  it('returns correct classes for medium size', () => {
    expect(badgeVariants({ size: 'md' })).toContain('lsd:h-[28px]');
    expect(badgeVariants({ size: 'md' })).toContain('lsd:px-[11px]');
    expect(badgeVariants({ size: 'md' })).toContain('lsd:text-[0.875rem]');
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
