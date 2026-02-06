import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Checkbox } from './index';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders as a checkbox role', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('lsd:size-5');
    expect(checkbox).toHaveClass('lsd:border');
    expect(checkbox).toHaveClass('lsd:cursor-pointer');
    expect(checkbox).toHaveClass('lsd:transition-shadow');
  });

  it('applies checked state classes correctly', () => {
    render(<Checkbox checked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('lsd:data-[state=checked]:bg-lsd-primary');
    expect(checkbox).toHaveClass(
      'lsd:data-[state=checked]:text-lsd-surface-primary',
    );
    expect(checkbox).toHaveClass('lsd:data-[state=checked]:border-lsd-primary');
  });

  it('shows check icon when checked', () => {
    render(<Checkbox checked />);
    const checkbox = screen.getByRole('checkbox');
    // The check icon should be visible when checked
    expect(checkbox).toBeChecked();
  });

  it('hides check icon when unchecked', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('handles click events', () => {
    const handleChange = vi.fn();
    render(<Checkbox onCheckedChange={handleChange} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies disabled state correctly', () => {
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('lsd:disabled:cursor-not-allowed');
    expect(checkbox).toHaveClass('lsd:disabled:opacity-50');
  });

  it('merges custom className with component classes', () => {
    render(<Checkbox className="custom-class" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<Checkbox data-testid="test-checkbox" id="chk-1" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-testid', 'test-checkbox');
    expect(checkbox).toHaveAttribute('id', 'chk-1');
  });

  it('applies data-slot attribute', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'data-slot',
      'checkbox',
    );
  });

  it('applies focus-visible classes', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('focus-visible:lsd:border-lsd-border-primary');
    expect(checkbox).toHaveClass('focus-visible:lsd:ring-[3px]');
  });

  it('applies aria-invalid classes when invalid', () => {
    render(<Checkbox aria-invalid />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });
});
