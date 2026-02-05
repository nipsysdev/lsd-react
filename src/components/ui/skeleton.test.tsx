import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skeleton } from './skeleton';

describe('Skeleton', () => {
  it('renders without crashing', () => {
    render(<Skeleton />);
    expect(
      document.querySelector('[data-slot="skeleton"]'),
    ).toBeInTheDocument();
  });

  it('renders as a div element', () => {
    render(<Skeleton />);
    expect(document.querySelector('[data-slot="skeleton"]')?.tagName).toBe(
      'DIV',
    );
  });

  it('applies base classes correctly', () => {
    render(<Skeleton />);
    const skeleton = document.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toHaveClass('lsd:bg-accent');
    expect(skeleton).toHaveClass('lsd:animate-pulse');
    expect(skeleton).toHaveClass('lsd:rounded-md');
  });

  it('merges custom className with component classes', () => {
    render(<Skeleton className="custom-class" />);
    const skeleton = document.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<Skeleton id="skel-1" />);
    const skeleton = document.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toHaveAttribute('id', 'skel-1');
  });

  it('applies data-slot attribute', () => {
    render(<Skeleton />);
    expect(document.querySelector('[data-slot="skeleton"]')).toHaveAttribute(
      'data-slot',
      'skeleton',
    );
  });

  it('applies width when specified', () => {
    render(<Skeleton style={{ width: '100px' }} />);
    const skeleton = document.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toHaveStyle({ width: '100px' });
  });

  it('applies height when specified', () => {
    render(<Skeleton style={{ height: '50px' }} />);
    const skeleton = document.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toHaveStyle({ height: '50px' });
  });

  it('can be used with custom styles for different shapes', () => {
    render(<Skeleton className="w-32 h-4" />);
    const skeleton = document.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toHaveClass('w-32');
    expect(skeleton).toHaveClass('h-4');
  });
});
