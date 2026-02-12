import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ButtonGroupSeparator } from '../index';

// Helper function to query by data-slot
const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe('ButtonGroupSeparator', () => {
  it('renders without crashing', () => {
    const { container } = render(<ButtonGroupSeparator />);
    expect(
      queryByDataSlot(container, 'button-group-separator'),
    ).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <ButtonGroupSeparator className="custom-class" />,
    );
    const separator = queryByDataSlot(container, 'button-group-separator');
    expect(separator).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<ButtonGroupSeparator />);
    const separator = queryByDataSlot(container, 'button-group-separator');
    expect(separator).toHaveClass('lsd:bg-border');
    expect(separator).toHaveClass('lsd:relative');
    expect(separator).toHaveClass('lsd:m-0!');
    expect(separator).toHaveClass('lsd:self-stretch');
    expect(separator).toHaveClass('lsd:data-[orientation=vertical]:h-auto');
  });

  it('applies vertical orientation by default', () => {
    const { container } = render(<ButtonGroupSeparator />);
    const separator = queryByDataSlot(container, 'button-group-separator');
    expect(separator).toHaveAttribute('data-orientation', 'vertical');
  });

  it('applies horizontal orientation', () => {
    const { container } = render(
      <ButtonGroupSeparator orientation="horizontal" />,
    );
    const separator = queryByDataSlot(container, 'button-group-separator');
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('passes through additional props', () => {
    render(
      <ButtonGroupSeparator data-testid="test-separator" data-custom="value" />,
    );
    expect(screen.getByTestId('test-separator')).toHaveAttribute(
      'data-custom',
      'value',
    );
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<ButtonGroupSeparator ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
