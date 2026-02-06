import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Separator } from './index';

describe('Separator', () => {
  it('renders without crashing', () => {
    render(<Separator />);
    expect(
      document.querySelector('[data-slot="separator"]'),
    ).toBeInTheDocument();
  });

  it('applies horizontal orientation classes by default', () => {
    render(<Separator orientation="horizontal" />);
    const separator = document.querySelector('[data-slot="separator"]');
    expect(separator).toHaveClass('lsd:data-[orientation=horizontal]:h-px');
    expect(separator).toHaveClass('lsd:data-[orientation=horizontal]:w-full');
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('applies vertical orientation classes correctly', () => {
    render(<Separator orientation="vertical" />);
    const separator = document.querySelector('[data-slot="separator"]');
    expect(separator).toHaveClass('lsd:data-[orientation=vertical]:h-full');
    expect(separator).toHaveClass('lsd:data-[orientation=vertical]:w-px');
    expect(separator).toHaveAttribute('data-orientation', 'vertical');
  });

  it('applies base classes correctly', () => {
    render(<Separator />);
    const separator = document.querySelector('[data-slot="separator"]');
    expect(separator).toHaveClass('lsd:bg-border');
    expect(separator).toHaveClass('lsd:shrink-0');
  });

  it('is decorative by default', () => {
    render(<Separator />);
    const separator = document.querySelector('[data-slot="separator"]');
    // Radix Separator sets decorative prop which makes it role="none"
    expect(separator).toHaveAttribute('role', 'none');
  });

  it('merges custom className with component classes', () => {
    render(<Separator className="custom-class" />);
    const separator = document.querySelector('[data-slot="separator"]');
    expect(separator).toHaveClass('custom-class');
  });

  it('forwards ref to underlying element', () => {
    const ref = vi.fn();
    render(<Separator ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('passes through additional props', () => {
    render(<Separator id="sep-1" />);
    const separator = document.querySelector('[data-slot="separator"]');
    expect(separator).toHaveAttribute('id', 'sep-1');
  });

  it('applies data-slot attribute', () => {
    render(<Separator />);
    expect(document.querySelector('[data-slot="separator"]')).toHaveAttribute(
      'data-slot',
      'separator',
    );
  });

  it('renders as a div element', () => {
    render(<Separator />);
    expect(document.querySelector('[data-slot="separator"]')?.tagName).toBe(
      'DIV',
    );
  });

  it('applies orientation attribute', () => {
    render(<Separator orientation="vertical" />);
    const separator = document.querySelector('[data-slot="separator"]');
    expect(separator).toHaveAttribute('data-orientation', 'vertical');
  });
});
