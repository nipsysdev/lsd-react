import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Toaster } from './index';

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: vi.fn(() => ({ theme: 'light' })),
}));

// Mock sonner Toaster
vi.mock('sonner', () => ({
  Toaster: vi.fn(({ className, style, ...props }) => (
    <div
      data-testid="sonner-toaster"
      className={className}
      style={style}
      {...props}
    />
  )),
}));

describe('Toaster', () => {
  it('renders without crashing', () => {
    render(<Toaster />);
    expect(screen.getByTestId('sonner-toaster')).toBeInTheDocument();
  });

  it('applies toaster class', () => {
    render(<Toaster />);
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toHaveClass('lsd:toaster');
    expect(toaster).toHaveClass('lsd:group');
  });

  it('applies custom CSS variables via style prop', () => {
    render(<Toaster />);
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster.style.getPropertyValue('--normal-bg')).toBe(
      'rgb(var(--lsd-surface-primary))',
    );
    expect(toaster.style.getPropertyValue('--normal-text')).toBe(
      'rgb(var(--lsd-text-primary))',
    );
    expect(toaster.style.getPropertyValue('--normal-border')).toBe(
      'rgb(var(--lsd-border))',
    );
  });

  it('passes through additional props', () => {
    render(<Toaster position="top-right" />);
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toHaveAttribute('position', 'top-right');
  });

  it('applies theme prop to sonner Toaster', () => {
    render(<Toaster />);
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toHaveAttribute('theme', 'light');
  });
});
