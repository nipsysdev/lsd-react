import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../index';

describe('SelectTrigger', () => {
  it('renders without crashing', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const trigger = document.querySelector('[data-slot="select-trigger"]');
    expect(trigger).toHaveAttribute('data-slot', 'select-trigger');
  });

  it('applies default size classes', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const trigger = document.querySelector('[data-slot="select-trigger"]');
    expect(trigger).toHaveAttribute('data-size', 'default');
    expect(trigger).toHaveClass('lsd:data-[size=default]:h-9');
  });

  it('applies small size classes when size="sm"', () => {
    render(
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const trigger = document.querySelector('[data-slot="select-trigger"]');
    expect(trigger).toHaveAttribute('data-size', 'sm');
    expect(trigger).toHaveClass('lsd:data-[size=sm]:h-8');
  });

  it('merges custom className with component classes', () => {
    render(
      <Select>
        <SelectTrigger className="custom-trigger-class">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const trigger = document.querySelector('[data-slot="select-trigger"]');
    expect(trigger).toHaveClass('custom-trigger-class');
  });

  it('passes through additional props', () => {
    render(
      <Select>
        <SelectTrigger data-testid="test-trigger" id="trigger-1">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const trigger = document.querySelector('[data-slot="select-trigger"]');
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });

  it('renders chevron icon', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const trigger = document.querySelector('[data-slot="select-trigger"]');
    expect(trigger?.querySelector('svg')).toBeInTheDocument();
  });
});
