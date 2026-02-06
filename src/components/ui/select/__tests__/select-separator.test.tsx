import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../index';

describe('SelectSeparator', () => {
  it('renders without crashing', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectSeparator />
          <SelectItem value="option-2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(
      document.querySelector('[data-slot="select-separator"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectSeparator />
          <SelectItem value="option-2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );
    const separator = document.querySelector('[data-slot="select-separator"]');
    expect(separator).toHaveAttribute('data-slot', 'select-separator');
  });

  it('applies base classes correctly', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectSeparator />
          <SelectItem value="option-2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );
    const separator = document.querySelector('[data-slot="select-separator"]');
    expect(separator).toHaveClass('lsd:bg-lsd-border');
    expect(separator).toHaveClass('lsd:h-px');
  });

  it('merges custom className with component classes', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectSeparator className="custom-separator-class" />
          <SelectItem value="option-2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );
    const separator = document.querySelector('[data-slot="select-separator"]');
    expect(separator).toHaveClass('custom-separator-class');
  });
});
