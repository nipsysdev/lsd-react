import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button, buttonVariants } from './index';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Test Button');
  });

  it('applies filled variant classes correctly', () => {
    render(<Button variant="filled">Filled</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:bg-primary');
    expect(button).toHaveClass('lsd:text-primary-foreground');
  });

  it('applies outlined variant classes correctly', () => {
    render(<Button variant="outlined">Outlined</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:bg-transparent');
    expect(button).toHaveClass('lsd:text-foreground');
  });

  it('applies filled-icon variant classes correctly', () => {
    render(<Button variant="filled-icon">Icon</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:bg-primary');
    expect(button).toHaveClass('lsd:rounded-full');
  });

  it('applies outlined-icon variant classes correctly', () => {
    render(<Button variant="outlined-icon">Icon</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:bg-transparent');
    expect(button).toHaveClass('lsd:rounded-full');
  });

  it('applies link variant classes correctly', () => {
    render(<Button variant="link">Link</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:bg-transparent');
    expect(button).toHaveClass('lsd:text-foreground');
    expect(button).toHaveClass('lsd:border-0');
    expect(button).toHaveClass('lsd:hover:underline');
  });

  it('applies destructive variant classes correctly', () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:bg-lsd-destructive');
    expect(button).toHaveClass('lsd:text-white');
    expect(button).toHaveClass('lsd:border-lsd-destructive');
    expect(button).toHaveClass('lsd:hover:bg-lsd-destructive/90');
  });

  it('applies destructive-icon variant classes correctly', () => {
    render(<Button variant="destructive-icon">Delete</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:bg-lsd-destructive');
    expect(button).toHaveClass('lsd:text-white');
    expect(button).toHaveClass('lsd:border-lsd-destructive');
    expect(button).toHaveClass('lsd:rounded-full');
    expect(button).toHaveClass('lsd:hover:bg-lsd-destructive/90');
  });

  it('applies success variant classes correctly', () => {
    render(<Button variant="success">Save</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:bg-lsd-success');
    expect(button).toHaveClass('lsd:text-white');
    expect(button).toHaveClass('lsd:border-lsd-success');
    expect(button).toHaveClass('lsd:hover:bg-lsd-success/90');
  });

  it('applies success-icon variant classes correctly', () => {
    render(<Button variant="success-icon">Save</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:bg-lsd-success');
    expect(button).toHaveClass('lsd:text-white');
    expect(button).toHaveClass('lsd:border-lsd-success');
    expect(button).toHaveClass('lsd:rounded-full');
    expect(button).toHaveClass('lsd:hover:bg-lsd-success/90');
  });

  it('applies medium size classes correctly', () => {
    render(<Button size="md">Medium</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:h-[34px]');
    expect(button).toHaveClass('lsd:px-6');
    expect(button).toHaveClass('lsd:py-2');
    expect(button).toHaveClass('lsd:text-base');
  });

  it('applies small size classes correctly', () => {
    render(<Button size="sm">Small</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:h-8');
    expect(button).toHaveClass('lsd:px-3');
    expect(button).toHaveClass('lsd:py-[6px]');
    expect(button).toHaveClass('lsd:text-sm');
  });

  it('applies large size classes correctly', () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:h-12');
    expect(button).toHaveClass('lsd:px-8');
    expect(button).toHaveClass('lsd:py-[10px]');
    expect(button).toHaveClass('lsd:text-lg');
  });

  it('applies icon-md size classes correctly', () => {
    render(<Button size="icon-md">Icon</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:w-10');
    expect(button).toHaveClass('lsd:h-10');
  });

  it('applies icon-sm size classes correctly', () => {
    render(<Button size="icon-sm">Icon</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:w-8');
    expect(button).toHaveClass('lsd:h-8');
  });

  it('applies icon-lg size classes correctly', () => {
    render(<Button size="icon-lg">Icon</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:w-12');
    expect(button).toHaveClass('lsd:h-12');
  });

  it('applies icon-xl size classes correctly', () => {
    render(<Button size="icon-xl">Icon</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:w-16');
    expect(button).toHaveClass('lsd:h-16');
  });

  it('uses default variant when not specified', () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:bg-primary');
  });

  it('uses default size when not specified', () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:h-[34px]');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref to underlying button element', () => {
    const ref = vi.fn();
    render(<Button ref={ref}>Ref Test</Button>);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement);
  });

  it('applies disabled state correctly', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('lsd:disabled:opacity-34');
    expect(button).toHaveClass('lsd:disabled:cursor-not-allowed');
  });

  it('merges custom className with component classes', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('applies base classes correctly', () => {
    render(<Button>Base</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:inline-flex');
    expect(button).toHaveClass('lsd:items-center');
    expect(button).toHaveClass('lsd:justify-center');
    expect(button).toHaveClass('lsd:border');
    expect(button).toHaveClass('lsd:transition-colors');
    expect(button).toHaveClass('lsd:cursor-pointer');
    expect(button).toHaveClass('lsd:text-primary-foreground');
    expect(button).toHaveClass('lsd:hover:underline');
  });

  it('passes through additional props', () => {
    render(
      <Button data-testid="test-button" aria-label="Test">
        Button
      </Button>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-testid', 'test-button');
    expect(button).toHaveAttribute('aria-label', 'Test');
  });

  it('shows loading spinner when loading prop is true', () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('dims content when loading', () => {
    render(<Button loading>Click me</Button>);
    const button = screen.getByRole('button');
    const content = button.querySelector('span.lsd\\:opacity-50');
    expect(content).toHaveTextContent('Click me');
  });

  it('does not show spinner when loading prop is false', () => {
    render(<Button loading={false}>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
    expect(button.querySelector('svg')).not.toBeInTheDocument();
  });

  it('applies fullWidth class when fullWidth prop is true', () => {
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('lsd:w-full');
  });

  it('does not apply fullWidth class when fullWidth prop is false', () => {
    render(<Button fullWidth={false}>Normal Width</Button>);
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('lsd:w-full');
  });

  it('disables button when loading is true even if disabled prop is false', () => {
    render(
      <Button loading={true} disabled={false}>
        Loading
      </Button>,
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('keeps button disabled when both loading and disabled are true', () => {
    render(
      <Button loading={true} disabled={true}>
        Loading
      </Button>,
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});

describe('buttonVariants', () => {
  it('returns correct classes for filled variant', () => {
    expect(buttonVariants({ variant: 'filled' })).toContain('lsd:bg-primary');
    expect(buttonVariants({ variant: 'filled' })).toContain(
      'lsd:text-primary-foreground',
    );
  });

  it('returns correct classes for outlined variant', () => {
    expect(buttonVariants({ variant: 'outlined' })).toContain(
      'lsd:bg-transparent',
    );
    expect(buttonVariants({ variant: 'outlined' })).toContain(
      'lsd:text-foreground',
    );
  });

  it('returns correct classes for filled-icon variant', () => {
    expect(buttonVariants({ variant: 'filled-icon' })).toContain(
      'lsd:bg-primary',
    );
    expect(buttonVariants({ variant: 'filled-icon' })).toContain(
      'lsd:rounded-full',
    );
  });

  it('returns correct classes for outlined-icon variant', () => {
    expect(buttonVariants({ variant: 'outlined-icon' })).toContain(
      'lsd:bg-transparent',
    );
    expect(buttonVariants({ variant: 'outlined-icon' })).toContain(
      'lsd:rounded-full',
    );
  });

  it('returns correct classes for link variant', () => {
    expect(buttonVariants({ variant: 'link' })).toContain('lsd:bg-transparent');
    expect(buttonVariants({ variant: 'link' })).toContain(
      'lsd:text-foreground',
    );
    expect(buttonVariants({ variant: 'link' })).toContain('lsd:border-0');
    expect(buttonVariants({ variant: 'link' })).toContain(
      'lsd:hover:underline',
    );
  });

  it('returns correct classes for destructive variant', () => {
    expect(buttonVariants({ variant: 'destructive' })).toContain(
      'lsd:bg-lsd-destructive',
    );
    expect(buttonVariants({ variant: 'destructive' })).toContain(
      'lsd:text-white',
    );
    expect(buttonVariants({ variant: 'destructive' })).toContain(
      'lsd:hover:bg-lsd-destructive/90',
    );
  });

  it('returns correct classes for destructive-icon variant', () => {
    expect(buttonVariants({ variant: 'destructive-icon' })).toContain(
      'lsd:bg-lsd-destructive',
    );
    expect(buttonVariants({ variant: 'destructive-icon' })).toContain(
      'lsd:text-white',
    );
    expect(buttonVariants({ variant: 'destructive-icon' })).toContain(
      'lsd:rounded-full',
    );
    expect(buttonVariants({ variant: 'destructive-icon' })).toContain(
      'lsd:hover:bg-lsd-destructive/90',
    );
  });

  it('returns correct classes for success variant', () => {
    expect(buttonVariants({ variant: 'success' })).toContain(
      'lsd:bg-lsd-success',
    );
    expect(buttonVariants({ variant: 'success' })).toContain('lsd:text-white');
    expect(buttonVariants({ variant: 'success' })).toContain(
      'lsd:hover:bg-lsd-success/90',
    );
  });

  it('returns correct classes for success-icon variant', () => {
    expect(buttonVariants({ variant: 'success-icon' })).toContain(
      'lsd:bg-lsd-success',
    );
    expect(buttonVariants({ variant: 'success-icon' })).toContain(
      'lsd:text-white',
    );
    expect(buttonVariants({ variant: 'success-icon' })).toContain(
      'lsd:rounded-full',
    );
    expect(buttonVariants({ variant: 'success-icon' })).toContain(
      'lsd:hover:bg-lsd-success/90',
    );
  });

  it('returns correct classes for medium size', () => {
    expect(buttonVariants({ size: 'md' })).toContain('lsd:h-[34px]');
    expect(buttonVariants({ size: 'md' })).toContain('lsd:px-6');
    expect(buttonVariants({ size: 'md' })).toContain('lsd:py-2');
    expect(buttonVariants({ size: 'md' })).toContain('lsd:text-base');
  });

  it('returns correct classes for small size', () => {
    expect(buttonVariants({ size: 'sm' })).toContain('lsd:h-8');
    expect(buttonVariants({ size: 'sm' })).toContain('lsd:px-3');
    expect(buttonVariants({ size: 'sm' })).toContain('lsd:py-[6px]');
    expect(buttonVariants({ size: 'sm' })).toContain('lsd:text-sm');
  });

  it('returns correct classes for large size', () => {
    expect(buttonVariants({ size: 'lg' })).toContain('lsd:h-12');
    expect(buttonVariants({ size: 'lg' })).toContain('lsd:px-8');
    expect(buttonVariants({ size: 'lg' })).toContain('lsd:py-[10px]');
    expect(buttonVariants({ size: 'lg' })).toContain('lsd:text-lg');
  });

  it('returns correct classes for icon-md size', () => {
    expect(buttonVariants({ size: 'icon-md' })).toContain('lsd:w-10');
    expect(buttonVariants({ size: 'icon-md' })).toContain('lsd:h-10');
  });

  it('returns correct classes for icon-sm size', () => {
    expect(buttonVariants({ size: 'icon-sm' })).toContain('lsd:w-8');
    expect(buttonVariants({ size: 'icon-sm' })).toContain('lsd:h-8');
  });

  it('returns correct classes for icon-lg size', () => {
    expect(buttonVariants({ size: 'icon-lg' })).toContain('lsd:w-12');
    expect(buttonVariants({ size: 'icon-lg' })).toContain('lsd:h-12');
  });

  it('returns correct classes for icon-xl size', () => {
    expect(buttonVariants({ size: 'icon-xl' })).toContain('lsd:w-16');
    expect(buttonVariants({ size: 'icon-xl' })).toContain('lsd:h-16');
  });

  it('uses default variant when not specified', () => {
    expect(buttonVariants({})).toContain('lsd:bg-primary');
  });

  it('uses default size when not specified', () => {
    expect(buttonVariants({})).toContain('lsd:h-[34px]');
  });

  it('combines variant and size correctly', () => {
    const classes = buttonVariants({ variant: 'outlined', size: 'lg' });
    expect(classes).toContain('lsd:bg-transparent');
    expect(classes).toContain('lsd:h-12');
  });
});
