import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ButtonGroupText } from '../index';

describe('ButtonGroupText', () => {
  it('renders without crashing', () => {
    render(<ButtonGroupText>Text</ButtonGroupText>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<ButtonGroupText className="custom-class">Text</ButtonGroupText>);
    expect(screen.getByText('Text')).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    render(<ButtonGroupText>Text</ButtonGroupText>);
    const text = screen.getByText('Text');
    expect(text).toHaveClass('lsd:bg-secondary');
    expect(text).toHaveClass('lsd:flex');
    expect(text).toHaveClass('lsd:items-center');
    expect(text).toHaveClass('lsd:gap-2');
    expect(text).toHaveClass('lsd:rounded-md');
    expect(text).toHaveClass('lsd:border');
    expect(text).toHaveClass('lsd:px-4');
    expect(text).toHaveClass('lsd:text-sm');
    expect(text).toHaveClass('lsd:font-medium');
    expect(text).toHaveClass('lsd:shadow-xs');
  });

  it('renders as div by default', () => {
    render(<ButtonGroupText>Text</ButtonGroupText>);
    const text = screen.getByText('Text');
    expect(text.tagName).toBe('DIV');
  });

  it('renders as Slot when asChild is true', () => {
    render(
      <ButtonGroupText asChild>
        <span>Text</span>
      </ButtonGroupText>,
    );
    const text = screen.getByText('Text');
    expect(text.tagName).toBe('SPAN');
  });

  it('passes through additional props', () => {
    render(
      <ButtonGroupText data-testid="test-text" data-custom="value">
        Text
      </ButtonGroupText>,
    );
    expect(screen.getByTestId('test-text')).toHaveAttribute(
      'data-custom',
      'value',
    );
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<ButtonGroupText ref={ref}>Text</ButtonGroupText>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
