import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CardFooter } from '../index';

// Helper function to query by data-slot
const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe('CardFooter', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardFooter />);
    expect(queryByDataSlot(container, 'card-footer')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardFooter className="custom-class" />);
    const footer = queryByDataSlot(container, 'card-footer');
    expect(footer).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<CardFooter />);
    const footer = queryByDataSlot(container, 'card-footer');
    expect(footer).toHaveClass('lsd:flex');
    expect(footer).toHaveClass('lsd:items-center');
    expect(footer).toHaveClass('lsd:px-6');
    expect(footer).toHaveClass('lsd:py-6');
    expect(footer).toHaveClass('lsd:border-t');
    expect(footer).toHaveClass('lsd:border-lsd-border-primary');
    expect(footer).toHaveClass('lsd:pt-6');
  });

  it('renders children', () => {
    render(
      <CardFooter>
        <button type="button">Footer Action</button>
      </CardFooter>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<CardFooter ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
