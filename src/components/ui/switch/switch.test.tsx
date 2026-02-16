import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Switch } from './index';

describe('Switch', () => {
  it('renders without crashing', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('renders as a switch role', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('lsd:inline-flex');
    expect(switchElement).toHaveClass('lsd:h-[18px]');
    expect(switchElement).toHaveClass('lsd:w-9');
    expect(switchElement).toHaveClass('lsd:rounded-full');
    expect(switchElement).toHaveClass('lsd:transition-all');
    expect(switchElement).toHaveClass('lsd:cursor-pointer');
  });

  it('applies checked state classes correctly', () => {
    render(<Switch checked />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass(
      'lsd:data-[state=checked]:bg-lsd-primary',
    );
  });

  it('applies unchecked state classes correctly', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass(
      'lsd:data-[state=unchecked]:bg-lsd-surface',
    );
  });

  it('has a thumb element', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement.children[0]).toHaveAttribute(
      'data-slot',
      'switch-thumb',
    );
  });

  it('applies thumb classes correctly', () => {
    render(<Switch />);
    const thumb = screen.getByRole('switch').children[0];
    expect(thumb).toHaveClass('lsd:bg-lsd-surface');
    expect(thumb).toHaveClass('lsd:size-5');
    expect(thumb).toHaveClass('lsd:rounded-full');
    expect(thumb).toHaveClass('lsd:transition-transform');
  });

  it('applies thumb translate classes for checked state', () => {
    render(<Switch checked />);
    const thumb = screen.getByRole('switch').children[0];
    expect(thumb).toHaveClass(
      'lsd:data-[state=checked]:translate-x-[calc(100%-2px)]',
    );
  });

  it('applies thumb translate classes for unchecked state', () => {
    render(<Switch />);
    const thumb = screen.getByRole('switch').children[0];
    // The thumb doesn't have an unchecked translate class, it's the default position
    expect(thumb).toHaveClass('lsd:transition-transform');
  });

  it('handles click events', () => {
    const handleChange = vi.fn();
    render(<Switch onCheckedChange={handleChange} />);
    fireEvent.click(screen.getByRole('switch'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies disabled state correctly', () => {
    render(<Switch disabled />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeDisabled();
    expect(switchElement).toHaveClass('lsd:disabled:cursor-not-allowed');
    expect(switchElement).toHaveClass('lsd:disabled:opacity-50');
  });

  it('merges custom className with component classes', () => {
    render(<Switch className="custom-class" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<Switch data-testid="test-switch" id="sw-1" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('data-testid', 'test-switch');
    expect(switchElement).toHaveAttribute('id', 'sw-1');
  });

  it('renders with small size', () => {
    render(<Switch size="sm" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('lsd:h-[14px]');
    expect(switchElement).toHaveClass('lsd:w-7');
    const thumb = switchElement.children[0];
    expect(thumb).toHaveClass('lsd:size-3');
  });

  it('renders with medium size (default)', () => {
    render(<Switch size="md" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('lsd:h-[18px]');
    expect(switchElement).toHaveClass('lsd:w-9');
    const thumb = switchElement.children[0];
    expect(thumb).toHaveClass('lsd:size-5');
  });

  it('renders with large size', () => {
    render(<Switch size="lg" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('lsd:h-[24px]');
    expect(switchElement).toHaveClass('lsd:w-12');
    const thumb = switchElement.children[0];
    expect(thumb).toHaveClass('lsd:size-6');
  });

  it('applies thumb translate classes for checked state with small size', () => {
    render(<Switch size="sm" checked />);
    const thumb = screen.getByRole('switch').children[0];
    expect(thumb).toHaveClass(
      'lsd:data-[state=checked]:translate-x-[calc(100%-2px)]',
    );
  });

  it('applies thumb translate classes for checked state with large size', () => {
    render(<Switch size="lg" checked />);
    const thumb = screen.getByRole('switch').children[0];
    expect(thumb).toHaveClass(
      'lsd:data-[state=checked]:translate-x-[calc(100%-2px)]',
    );
  });

  it('applies data-slot attribute', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toHaveAttribute('data-slot', 'switch');
  });

  it('applies focus-visible classes', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('focus-visible:lsd:border-lsd-border');
    expect(switchElement).toHaveClass('focus-visible:lsd:ring-[3px]');
  });

  describe('Size variants', () => {
    it('applies small size classes correctly', () => {
      render(<Switch size="sm" />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveClass('lsd:h-[14px]');
      expect(switchElement).toHaveClass('lsd:w-7');
    });

    it('applies small size thumb classes correctly', () => {
      render(<Switch size="sm" />);
      const thumb = screen.getByRole('switch').children[0];
      expect(thumb).toHaveClass('lsd:size-3');
    });

    it('applies medium size classes correctly', () => {
      render(<Switch size="md" />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveClass('lsd:h-[18px]');
      expect(switchElement).toHaveClass('lsd:w-9');
    });

    it('applies medium size thumb classes correctly', () => {
      render(<Switch size="md" />);
      const thumb = screen.getByRole('switch').children[0];
      expect(thumb).toHaveClass('lsd:size-5');
    });

    it('applies large size classes correctly', () => {
      render(<Switch size="lg" />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveClass('lsd:h-[24px]');
      expect(switchElement).toHaveClass('lsd:w-12');
    });

    it('applies large size thumb classes correctly', () => {
      render(<Switch size="lg" />);
      const thumb = screen.getByRole('switch').children[0];
      expect(thumb).toHaveClass('lsd:size-6');
    });

    it('defaults to medium size when no size prop is provided', () => {
      render(<Switch />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveClass('lsd:h-[18px]');
      expect(switchElement).toHaveClass('lsd:w-9');
    });

    it('applies small size with checked state', () => {
      render(<Switch size="sm" checked />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveClass('lsd:h-[14px]');
      expect(switchElement).toHaveClass('lsd:w-7');
      expect(switchElement).toHaveClass(
        'lsd:data-[state=checked]:bg-lsd-primary',
      );
    });

    it('applies large size with disabled state', () => {
      render(<Switch size="lg" disabled />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveClass('lsd:h-[24px]');
      expect(switchElement).toHaveClass('lsd:w-12');
      expect(switchElement).toBeDisabled();
    });
  });
});
