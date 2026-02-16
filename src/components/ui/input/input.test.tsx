import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './index';

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders as an input element', () => {
    render(<Input />);
    expect(screen.getByRole('textbox').tagName).toBe('INPUT');
  });

  it('renders with default variant (underlined)', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    const wrapper = input.parentElement;
    expect(wrapper).toHaveClass('lsd:border-b-lsd-border');
  });

  it('renders with outlined variant', () => {
    render(<Input variant="outlined" />);
    const input = screen.getByRole('textbox');
    const wrapper = input.parentElement;
    expect(wrapper).toHaveClass('lsd:border-lsd-border');
  });

  it('renders with default size (medium)', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('lsd:text-base');
    expect(input).toHaveClass('lsd:py-3');
  });

  it('renders with large size', () => {
    render(<Input size="lg" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('lsd:text-lg');
    expect(input).toHaveClass('lsd:py-4');
  });

  it('renders with small size', () => {
    render(<Input size="sm" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('lsd:text-sm');
    expect(input).toHaveClass('lsd:py-2');
  });

  it('renders with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Email').tagName).toBe('LABEL');
  });

  it('associates label with input', () => {
    render(<Input label="Email" />);
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Email');
    expect(label).toHaveAttribute('for', input.id);
  });

  it('renders with supporting text', () => {
    render(<Input supportingText="Enter your email" />);
    expect(screen.getByText('Enter your email')).toBeInTheDocument();
  });

  it('applies error state correctly', () => {
    render(<Input error />);
    const input = screen.getByRole('textbox');
    const wrapper = input.parentElement;
    expect(wrapper).toHaveClass('lsd:border-lsd-destructive');
  });

  it('applies error state to supporting text', () => {
    render(<Input error supportingText="Error message" />);
    const supportingText = screen.getByText('Error message');
    expect(supportingText).toHaveClass('lsd:text-lsd-destructive');
  });

  it('applies error state to border', () => {
    render(<Input error variant="outlined" />);
    const wrapper = screen.getByRole('textbox').parentElement;
    expect(wrapper).toHaveClass('lsd:border-lsd-destructive');
  });

  it('handles change events', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test' },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('handles focus events', () => {
    const handleFocus = vi.fn();
    render(<Input onFocus={handleFocus} />);
    fireEvent.focus(screen.getByRole('textbox'));
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('handles blur events', () => {
    const handleBlur = vi.fn();
    render(<Input onBlur={handleBlur} />);
    fireEvent.blur(screen.getByRole('textbox'));
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('applies disabled state correctly', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('lsd:disabled:pointer-events-none');
    expect(input).toHaveClass('lsd:disabled:cursor-not-allowed');
    expect(input).toHaveClass('lsd:disabled:opacity-34');
  });

  it('merges custom className with component classes', () => {
    render(<Input className="custom-class" />);
    const wrapper = screen.getByRole('textbox').parentElement?.parentElement;
    expect(wrapper).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<Input data-testid="test-input" id="input-1" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('data-testid', 'test-input');
    expect(input).toHaveAttribute('id', 'input-1');
  });

  it('forwards ref to underlying input element', () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
  });

  it('uses provided id instead of generated one', () => {
    render(<Input id="custom-id" />);
    const input = screen.getByRole('textbox');
    expect(input.id).toBe('custom-id');
  });

  it('generates unique id when not provided', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input.id).toBeTruthy();
  });

  it('renders with type attribute', () => {
    render(<Input type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Enter text');
  });

  it('renders with value', () => {
    render(<Input value="test value" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('test value');
  });

  it('applies focus-visible classes', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('focus-visible:lsd:outline-none');
    expect(input).toHaveClass('lsd:px-4');
  });

  it('applies base classes correctly', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('lsd:border-none');
    expect(input).toHaveClass('lsd:outline-none');
    expect(input).toHaveClass('lsd:bg-transparent');
    expect(input).toHaveClass('lsd:text-lsd-text-primary');
    expect(input).toHaveClass('lsd:w-full');
    expect(input).toHaveClass('lsd:h-full');
  });

  it('applies label size classes correctly', () => {
    render(<Input size="lg" label="Label" />);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('lsd:text-base');
  });

  it('applies supporting text size classes correctly', () => {
    render(<Input size="lg" supportingText="Supporting" />);
    const supportingText = screen.getByText('Supporting');
    expect(supportingText).toHaveClass('lsd:text-base');
  });

  it('renders without label when not provided', () => {
    render(<Input />);
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
    expect(
      screen.queryByRole('textbox')?.parentElement?.querySelector('label'),
    ).toBeNull();
  });

  it('renders without supporting text when not provided', () => {
    render(<Input />);
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
    expect(screen.queryByText(/supporting/i)).not.toBeInTheDocument();
  });
});
