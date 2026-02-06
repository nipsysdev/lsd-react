import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CardDescription } from '../index';

// Helper function to query by data-slot
const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe('CardDescription', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardDescription />);
    expect(queryByDataSlot(container, 'card-description')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardDescription className="custom-class" />);
    const description = queryByDataSlot(container, 'card-description');
    expect(description).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<CardDescription />);
    const description = queryByDataSlot(container, 'card-description');
    expect(description).toHaveClass('lsd:text-lsd-text-secondary');
    expect(description).toHaveClass('lsd:text-sm');
  });

  it('renders children', () => {
    render(
      <CardDescription>
        <span>Card Description</span>
      </CardDescription>,
    );
    expect(screen.getByText('Card Description')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<CardDescription ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
