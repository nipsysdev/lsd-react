import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../index';

describe('SelectItem', () => {
  it('renders without crashing', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(
      screen.getByRole('option', { name: 'Option 1' }),
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
        </SelectContent>
      </Select>,
    );
    const item = document.querySelector('[data-slot="select-item"]');
    expect(item).toHaveAttribute('data-slot', 'select-item');
  });

  it('applies base classes correctly', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const item = document.querySelector('[data-slot="select-item"]');
    expect(item).toHaveClass('lsd:flex');
    expect(item).toHaveClass('lsd:w-full');
    expect(item).toHaveClass('lsd:cursor-default');
    expect(item).toHaveClass('lsd:items-center');
  });

  it('merges custom className with component classes', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1" className="custom-item-class">
            Option 1
          </SelectItem>
        </SelectContent>
      </Select>,
    );
    const item = document.querySelector('[data-slot="select-item"]');
    expect(item).toHaveClass('custom-item-class');
  });

  it('passes through additional props', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1" data-testid="test-item" id="item-1">
            Option 1
          </SelectItem>
        </SelectContent>
      </Select>,
    );
    const item = document.querySelector('[data-slot="select-item"]');
    expect(item).toHaveAttribute('data-testid', 'test-item');
    expect(item).toHaveAttribute('id', 'item-1');
  });

  it('renders check icon when selected', () => {
    render(
      <Select open value="option-1">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const item = document.querySelector('[data-slot="select-item"]');
    expect(item?.querySelector('svg')).toBeInTheDocument();
  });
});
