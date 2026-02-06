import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Label, labelVariants } from './index';

describe('Label', () => {
  it('renders without crashing', () => {
    render(<Label>Label</Label>);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders as a label element', () => {
    render(<Label>Label</Label>);
    expect(screen.getByText('Label').tagName).toBe('LABEL');
  });

  it('applies default variant classes correctly', () => {
    render(<Label variant="default">Label</Label>);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('lsd:text-lsd-text-primary');
  });

  it('applies secondary variant classes correctly', () => {
    render(<Label variant="secondary">Label</Label>);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('lsd:text-lsd-text-secondary');
  });

  it('applies small size classes correctly', () => {
    render(<Label size="sm">Label</Label>);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('lsd:text-[0.75rem]');
    expect(label).toHaveClass('lsd:leading-[1rem]');
  });

  it('applies medium size classes correctly', () => {
    render(<Label size="md">Label</Label>);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('lsd:text-[0.875rem]');
    expect(label).toHaveClass('lsd:leading-[1.25rem]');
  });

  it('applies large size classes correctly', () => {
    render(<Label size="lg">Label</Label>);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('lsd:text-[1rem]');
    expect(label).toHaveClass('lsd:leading-[1.5rem]');
  });

  it('uses default variant when not specified', () => {
    render(<Label>Label</Label>);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('lsd:text-lsd-text-primary');
  });

  it('uses default size when not specified', () => {
    render(<Label>Label</Label>);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('lsd:text-[0.875rem]');
  });

  it('applies base classes correctly', () => {
    render(<Label>Label</Label>);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('lsd:flex');
    expect(label).toHaveClass('lsd:items-center');
    expect(label).toHaveClass('lsd:gap-2');
    expect(label).toHaveClass('lsd:select-none');
  });

  it('merges custom className with component classes', () => {
    render(<Label className="custom-class">Label</Label>);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Label data-testid="test-label" htmlFor="input-1">
        Label
      </Label>,
    );
    const label = screen.getByText('Label');
    expect(label).toHaveAttribute('data-testid', 'test-label');
    expect(label).toHaveAttribute('for', 'input-1');
  });

  it('applies data-slot attribute', () => {
    render(<Label>Label</Label>);
    expect(screen.getByText('Label')).toHaveAttribute('data-slot', 'label');
  });

  it('forwards ref to underlying element', () => {
    const ref = vi.fn();
    render(<Label ref={ref}>Label</Label>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('labelVariants', () => {
  it('returns correct classes for default variant', () => {
    expect(labelVariants({ variant: 'default' })).toContain(
      'lsd:text-lsd-text-primary',
    );
  });

  it('returns correct classes for secondary variant', () => {
    expect(labelVariants({ variant: 'secondary' })).toContain(
      'lsd:text-lsd-text-secondary',
    );
  });

  it('returns correct classes for small size', () => {
    expect(labelVariants({ size: 'sm' })).toContain('lsd:text-[0.75rem]');
    expect(labelVariants({ size: 'sm' })).toContain('lsd:leading-[1rem]');
  });

  it('returns correct classes for medium size', () => {
    expect(labelVariants({ size: 'md' })).toContain('lsd:text-[0.875rem]');
    expect(labelVariants({ size: 'md' })).toContain('lsd:leading-[1.25rem]');
  });

  it('returns correct classes for large size', () => {
    expect(labelVariants({ size: 'lg' })).toContain('lsd:text-[1rem]');
    expect(labelVariants({ size: 'lg' })).toContain('lsd:leading-[1.5rem]');
  });

  it('uses default variant when not specified', () => {
    expect(labelVariants({})).toContain('lsd:text-lsd-text-primary');
  });

  it('uses default size when not specified', () => {
    expect(labelVariants({})).toContain('lsd:text-[0.875rem]');
  });

  it('combines variant and size correctly', () => {
    const classes = labelVariants({ variant: 'secondary', size: 'lg' });
    expect(classes).toContain('lsd:text-lsd-text-secondary');
    expect(classes).toContain('lsd:text-[1rem]');
  });
});
