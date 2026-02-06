import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CardTitle } from '../index';

// Helper function to query by data-slot
const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe('CardTitle', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardTitle />);
    expect(queryByDataSlot(container, 'card-title')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardTitle className="custom-class" />);
    const title = queryByDataSlot(container, 'card-title');
    expect(title).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<CardTitle />);
    const title = queryByDataSlot(container, 'card-title');
    expect(title).toHaveClass('lsd:leading-none');
    expect(title).toHaveClass('lsd:font-semibold');
  });

  it('renders children', () => {
    render(
      <CardTitle>
        <span>Card Title</span>
      </CardTitle>,
    );
    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<CardTitle ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
