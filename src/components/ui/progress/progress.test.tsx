import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Progress } from './index';

describe('Progress', () => {
  it('renders without crashing', () => {
    render(<Progress />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders as a progressbar role', () => {
    render(<Progress />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(<Progress />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveClass('lsd:relative');
    expect(progress).toHaveClass('lsd:w-full');
    expect(progress).toHaveClass('lsd:h-3');
    expect(progress).toHaveClass('lsd:overflow-hidden');
    expect(progress).toHaveClass('lsd:bg-lsd-surface');
    expect(progress).toHaveClass('lsd:border');
    expect(progress).toHaveClass('lsd:border-lsd-border');
  });

  it('renders indicator element', () => {
    render(<Progress />);
    const indicator = document.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).toBeInTheDocument();
  });

  it('applies indicator base classes correctly', () => {
    render(<Progress />);
    const indicator = document.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).toHaveClass('lsd:h-full');
    expect(indicator).toHaveClass('lsd:w-full');
    expect(indicator).toHaveClass('lsd:flex-1');
    expect(indicator).toHaveClass('lsd:bg-lsd-primary');
  });

  it('applies transition class for determinate progress', () => {
    render(<Progress value={50} />);
    const indicator = document.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).toHaveClass('lsd:transition-all');
  });

  it('applies indeterminate animation classes', () => {
    render(<Progress indeterminate />);
    const indicator = document.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).toHaveClass('lsd:animate-indeterminate-progress');
  });

  it('applies slow speed animation class', () => {
    render(<Progress indeterminate speed="slow" />);
    const indicator = document.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).toHaveClass('lsd:animate-indeterminate-progress-slow');
  });

  it('applies fast speed animation class', () => {
    render(<Progress indeterminate speed="fast" />);
    const indicator = document.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).toHaveClass('lsd:animate-indeterminate-progress-fast');
  });

  it('applies normal speed by default', () => {
    render(<Progress indeterminate speed="normal" />);
    const indicator = document.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).toHaveClass('lsd:animate-indeterminate-progress');
    expect(indicator).not.toHaveClass(
      'lsd:animate-indeterminate-progress-slow',
    );
    expect(indicator).not.toHaveClass(
      'lsd:animate-indeterminate-progress-fast',
    );
  });

  it('merges custom className with component classes', () => {
    render(<Progress className="custom-progress-class" />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveClass('custom-progress-class');
  });

  it('passes through additional props', () => {
    render(<Progress data-testid="test-progress" id="progress-1" />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('data-testid', 'test-progress');
    expect(progress).toHaveAttribute('id', 'progress-1');
  });

  it('forwards ref to underlying element', () => {
    const ref = vi.fn();
    render(<Progress ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement);
  });

  it('applies data-slot attribute', () => {
    render(<Progress />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('data-slot', 'progress');
  });

  it('applies data-slot attribute to indicator', () => {
    render(<Progress />);
    const indicator = document.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).toHaveAttribute('data-slot', 'progress-indicator');
  });

  it('does not apply indeterminate classes when determinate', () => {
    render(<Progress value={50} />);
    const indicator = document.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).not.toHaveClass('lsd:animate-indeterminate-progress');
  });

  it('applies style for determinate progress', () => {
    render(<Progress value={75} />);
    const indicator = document.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).toHaveStyle({ transform: 'translateX(-25%)' });
  });

  it('applies empty style for indeterminate progress', () => {
    render(<Progress indeterminate />);
    const indicator = document.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).toBeInTheDocument();
    // For indeterminate, style.transform should be empty or undefined
    const style = indicator?.getAttribute('style');
    expect(style).toBeFalsy();
  });
});
