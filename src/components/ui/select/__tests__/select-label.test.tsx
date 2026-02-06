import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../index';

describe('SelectLabel', () => {
  it('renders without crashing', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group Label</SelectLabel>
            <SelectItem value="option-1">Option 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByText('Group Label')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group Label</SelectLabel>
            <SelectItem value="option-1">Option 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    const label = document.querySelector('[data-slot="select-label"]');
    expect(label).toHaveAttribute('data-slot', 'select-label');
  });

  it('applies base classes correctly', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group Label</SelectLabel>
            <SelectItem value="option-1">Option 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    const label = document.querySelector('[data-slot="select-label"]');
    expect(label).toHaveClass('lsd:text-lsd-text-secondary');
    expect(label).toHaveClass('lsd:text-xs');
  });

  it('merges custom className with component classes', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="custom-label-class">
              Group Label
            </SelectLabel>
            <SelectItem value="option-1">Option 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    const label = document.querySelector('[data-slot="select-label"]');
    expect(label).toHaveClass('custom-label-class');
  });
});
