import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Toggle, toggleVariants } from './toggle';

describe('Toggle', () => {
  it('renders without crashing', () => {
    render(<Toggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders as a button role', () => {
    render(<Toggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders as a button element', () => {
    render(<Toggle />);
    expect(screen.getByRole('button').tagName).toBe('BUTTON');
  });

  it('applies base classes correctly', () => {
    render(<Toggle />);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveClass('lsd:inline-flex');
    expect(toggle).toHaveClass('lsd:items-center');
    expect(toggle).toHaveClass('lsd:justify-center');
    expect(toggle).toHaveClass('lsd:border');
    expect(toggle).toHaveClass('lsd:transition-colors');
    expect(toggle).toHaveClass('lsd:bg-transparent');
    expect(toggle).toHaveClass('lsd:text-lsd-text');
    expect(toggle).toHaveClass('lsd:border-lsd-border');
    expect(toggle).toHaveClass('lsd:cursor-pointer');
  });

  it('applies default size classes correctly', () => {
    render(<Toggle size="default" />);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveClass('lsd:h-10');
    expect(toggle).toHaveClass('lsd:min-w-10');
    expect(toggle).toHaveClass('lsd:px-3');
    expect(toggle).toHaveClass('lsd:py-[6px]');
  });

  it('applies small size classes correctly', () => {
    render(<Toggle size="sm" />);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveClass('lsd:h-8');
    expect(toggle).toHaveClass('lsd:min-w-8');
    expect(toggle).toHaveClass('lsd:px-2');
    expect(toggle).toHaveClass('lsd:py-[6px]');
    expect(toggle).toHaveClass('lsd:text-[0.75rem]');
  });

  it('applies large size classes correctly', () => {
    render(<Toggle size="lg" />);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveClass('lsd:h-12');
    expect(toggle).toHaveClass('lsd:min-w-12');
    expect(toggle).toHaveClass('lsd:px-4');
    expect(toggle).toHaveClass('lsd:py-[10px]');
    expect(toggle).toHaveClass('lsd:text-[0.875rem]');
  });

  it('uses default size when not specified', () => {
    render(<Toggle />);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveClass('lsd:h-10');
  });

  it('applies checked state classes correctly', () => {
    render(<Toggle defaultChecked />);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveClass('lsd:data-[state=on]:bg-lsd-primary');
    expect(toggle).toHaveClass('lsd:data-[state=on]:text-lsd-surface-primary');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Toggle onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies disabled state correctly', () => {
    render(<Toggle disabled />);
    const toggle = screen.getByRole('button');
    expect(toggle).toBeDisabled();
    expect(toggle).toHaveClass('lsd:disabled:opacity-34');
    expect(toggle).toHaveClass('lsd:disabled:cursor-not-allowed');
    expect(toggle).toHaveClass('lsd:disabled:no-underline');
  });

  it('merges custom className with component classes', () => {
    render(<Toggle className="custom-class" />);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<Toggle data-testid="test-toggle" id="toggle-1" />);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('data-testid', 'test-toggle');
    expect(toggle).toHaveAttribute('id', 'toggle-1');
  });

  it('forwards ref to underlying button element', () => {
    const ref = vi.fn();
    render(<Toggle ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement);
  });

  it('applies hover underline class', () => {
    render(<Toggle />);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveClass('lsd:hover:underline');
  });

  it('does not apply data-state attribute when unchecked', () => {
    render(<Toggle />);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('data-state', 'off');
  });
});

describe('toggleVariants', () => {
  it('returns correct classes for default size', () => {
    expect(toggleVariants({ size: 'default' })).toContain('lsd:h-10');
    expect(toggleVariants({ size: 'default' })).toContain('lsd:min-w-10');
    expect(toggleVariants({ size: 'default' })).toContain('lsd:px-3');
    expect(toggleVariants({ size: 'default' })).toContain('lsd:py-[6px]');
  });

  it('returns correct classes for small size', () => {
    expect(toggleVariants({ size: 'sm' })).toContain('lsd:h-8');
    expect(toggleVariants({ size: 'sm' })).toContain('lsd:min-w-8');
    expect(toggleVariants({ size: 'sm' })).toContain('lsd:px-2');
    expect(toggleVariants({ size: 'sm' })).toContain('lsd:py-[6px]');
    expect(toggleVariants({ size: 'sm' })).toContain('lsd:text-[0.75rem]');
  });

  it('returns correct classes for large size', () => {
    expect(toggleVariants({ size: 'lg' })).toContain('lsd:h-12');
    expect(toggleVariants({ size: 'lg' })).toContain('lsd:min-w-12');
    expect(toggleVariants({ size: 'lg' })).toContain('lsd:px-4');
    expect(toggleVariants({ size: 'lg' })).toContain('lsd:py-[10px]');
    expect(toggleVariants({ size: 'lg' })).toContain('lsd:text-[0.875rem]');
  });

  it('uses default size when not specified', () => {
    expect(toggleVariants({})).toContain('lsd:h-10');
  });

  it('includes base classes', () => {
    expect(toggleVariants({})).toContain('lsd:inline-flex');
    expect(toggleVariants({})).toContain('lsd:items-center');
    expect(toggleVariants({})).toContain('lsd:justify-center');
    expect(toggleVariants({})).toContain('lsd:border');
    expect(toggleVariants({})).toContain('lsd:transition-colors');
    expect(toggleVariants({})).toContain('lsd:bg-transparent');
    expect(toggleVariants({})).toContain('lsd:text-lsd-text');
    expect(toggleVariants({})).toContain('lsd:border-lsd-border');
    expect(toggleVariants({})).toContain('lsd:cursor-pointer');
  });

  it('includes checked state classes', () => {
    expect(toggleVariants({})).toContain('lsd:data-[state=on]:bg-lsd-primary');
    expect(toggleVariants({})).toContain(
      'lsd:data-[state=on]:text-lsd-surface-primary',
    );
  });

  it('includes disabled state classes', () => {
    expect(toggleVariants({})).toContain('lsd:disabled:opacity-34');
    expect(toggleVariants({})).toContain('lsd:disabled:cursor-not-allowed');
    expect(toggleVariants({})).toContain('lsd:disabled:no-underline');
  });
});
