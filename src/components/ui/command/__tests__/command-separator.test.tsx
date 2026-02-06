import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../index';

describe('CommandSeparator', () => {
  it('renders without crashing', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
          <CommandSeparator />
          <CommandItem>Item 2</CommandItem>
        </CommandList>
      </Command>,
    );
    expect(
      document.querySelector('[data-slot="command-separator"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
          <CommandSeparator />
          <CommandItem>Item 2</CommandItem>
        </CommandList>
      </Command>,
    );
    const separator = document.querySelector('[data-slot="command-separator"]');
    expect(separator).toHaveAttribute('data-slot', 'command-separator');
  });

  it('applies base classes correctly', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
          <CommandSeparator />
          <CommandItem>Item 2</CommandItem>
        </CommandList>
      </Command>,
    );
    const separator = document.querySelector('[data-slot="command-separator"]');
    expect(separator).toHaveClass('lsd:bg-lsd-border');
    expect(separator).toHaveClass('lsd:-mx-1');
    expect(separator).toHaveClass('lsd:h-px');
  });

  it('merges custom className with component classes', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
          <CommandSeparator className="custom-separator-class" />
          <CommandItem>Item 2</CommandItem>
        </CommandList>
      </Command>,
    );
    const separator = document.querySelector('[data-slot="command-separator"]');
    expect(separator).toHaveClass('custom-separator-class');
  });
});
