import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
} from './button-group';

// Helper function to query by data-slot
const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe('ButtonGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(<ButtonGroup />);
    expect(queryByDataSlot(container, 'button-group')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<ButtonGroup className="custom-class" />);
    const group = queryByDataSlot(container, 'button-group');
    expect(group).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<ButtonGroup />);
    const group = queryByDataSlot(container, 'button-group');
    expect(group).toHaveClass('lsd:flex');
    expect(group).toHaveClass('lsd:w-fit');
    expect(group).toHaveClass('lsd:items-stretch');
  });

  it('applies horizontal orientation by default', () => {
    const { container } = render(<ButtonGroup />);
    const group = queryByDataSlot(container, 'button-group');
    expect(group).toHaveClass('lsd:[&>*:not(:first-child)]:rounded-l-none');
    expect(group).toHaveClass('lsd:[&>*:not(:first-child)]:border-l-0');
    expect(group).toHaveClass('lsd:[&>*:not(:last-child)]:rounded-r-none');
  });

  it('applies vertical orientation', () => {
    const { container } = render(<ButtonGroup orientation="vertical" />);
    const group = queryByDataSlot(container, 'button-group');
    expect(group).toHaveClass('lsd:flex-col');
    expect(group).toHaveClass('lsd:[&>*:not(:first-child)]:rounded-t-none');
    expect(group).toHaveClass('lsd:[&>*:not(:first-child)]:border-t-0');
    expect(group).toHaveClass('lsd:[&>*:not(:last-child)]:rounded-b-none');
  });

  it('passes through additional props', () => {
    render(<ButtonGroup data-testid="test-group" data-custom="value" />);
    expect(screen.getByTestId('test-group')).toHaveAttribute(
      'data-custom',
      'value',
    );
  });

  it('renders children', () => {
    render(
      <ButtonGroup>
        <button type="button">Button 1</button>
        <button type="button">Button 2</button>
      </ButtonGroup>,
    );
    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<ButtonGroup ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLFieldSetElement);
  });
});

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
    expect(text).toHaveClass('lsd:cursor-pointer');
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
    expect(separator).toHaveClass('lsd:!m-0');
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

describe('buttonGroupVariants', () => {
  it('returns correct classes for horizontal orientation', () => {
    const classes = buttonGroupVariants({ orientation: 'horizontal' });
    expect(classes).toContain('lsd:flex');
    expect(classes).toContain('lsd:[&>*:not(:first-child)]:rounded-l-none');
    expect(classes).toContain('lsd:[&>*:not(:first-child)]:border-l-0');
    expect(classes).toContain('lsd:[&>*:not(:last-child)]:rounded-r-none');
  });

  it('returns correct classes for vertical orientation', () => {
    const classes = buttonGroupVariants({ orientation: 'vertical' });
    expect(classes).toContain('lsd:flex-col');
    expect(classes).toContain('lsd:[&>*:not(:first-child)]:rounded-t-none');
    expect(classes).toContain('lsd:[&>*:not(:first-child)]:border-t-0');
    expect(classes).toContain('lsd:[&>*:not(:last-child)]:rounded-b-none');
  });

  it('returns default classes when no orientation is provided', () => {
    const classes = buttonGroupVariants({});
    expect(classes).toContain('lsd:flex');
    expect(classes).toContain('lsd:[&>*:not(:first-child)]:rounded-l-none');
  });
});

describe('ButtonGroup composition', () => {
  it('renders a complete button group with buttons', () => {
    const { container } = render(
      <ButtonGroup>
        <button type="button">Button 1</button>
        <button type="button">Button 2</button>
        <button type="button">Button 3</button>
      </ButtonGroup>,
    );

    expect(queryByDataSlot(container, 'button-group')).toBeInTheDocument();
    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
    expect(screen.getByText('Button 3')).toBeInTheDocument();
  });

  it('renders a button group with text and separator', () => {
    const { container } = render(
      <ButtonGroup>
        <ButtonGroupText>Group Label</ButtonGroupText>
        <ButtonGroupSeparator />
        <button type="button">Button 1</button>
        <button type="button">Button 2</button>
      </ButtonGroup>,
    );

    expect(queryByDataSlot(container, 'button-group')).toBeInTheDocument();
    expect(
      queryByDataSlot(container, 'button-group-separator'),
    ).toBeInTheDocument();
    expect(screen.getByText('Group Label')).toBeInTheDocument();
    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });

  it('renders a vertical button group', () => {
    const { container } = render(
      <ButtonGroup orientation="vertical">
        <button type="button">Button 1</button>
        <button type="button">Button 2</button>
        <button type="button">Button 3</button>
      </ButtonGroup>,
    );

    const group = queryByDataSlot(container, 'button-group');
    expect(group).toHaveAttribute('data-orientation', 'vertical');
    expect(group).toHaveClass('lsd:flex-col');
  });
});
