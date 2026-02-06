import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../index';

describe('Command', () => {
  it('renders without crashing', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    expect(document.querySelector('[data-slot="command"]')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const command = document.querySelector('[data-slot="command"]');
    expect(command).toHaveAttribute('data-slot', 'command');
  });

  it('applies base classes correctly', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const command = document.querySelector('[data-slot="command"]');
    expect(command).toHaveClass('lsd:bg-lsd-surface-primary');
    expect(command).toHaveClass('lsd:text-lsd-text');
    expect(command).toHaveClass('lsd:flex');
    expect(command).toHaveClass('lsd:h-full');
    expect(command).toHaveClass('lsd:w-full');
    expect(command).toHaveClass('lsd:flex-col');
    expect(command).toHaveClass('lsd:overflow-hidden');
    expect(command).toHaveClass('lsd:rounded-md');
  });

  it('merges custom className with component classes', () => {
    render(
      <Command className="custom-command-class">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const command = document.querySelector('[data-slot="command"]');
    expect(command).toHaveClass('custom-command-class');
  });

  it('passes through additional props', () => {
    render(
      <Command data-testid="test-command" id="command-1">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const command = document.querySelector('[data-slot="command"]');
    expect(command).toHaveAttribute('data-testid', 'test-command');
    expect(command).toHaveAttribute('id', 'command-1');
  });

  it('renders with all subcomponents', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>Item 1</CommandItem>
            <CommandItem>Item 2</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup>
            <CommandItem>Item 3</CommandItem>
          </CommandGroup>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>,
    );
    // Verify parent is present
    expect(document.querySelector('[data-slot="command"]')).toBeInTheDocument();
    // Verify input is present
    expect(
      document.querySelector('[data-slot="command-input-wrapper"]'),
    ).toBeInTheDocument();
    // Verify list is present
    expect(
      document.querySelector('[data-slot="command-list"]'),
    ).toBeInTheDocument();
    // Verify groups are present
    expect(
      document.querySelectorAll('[data-slot="command-group"]'),
    ).toHaveLength(2);
    // Verify items are present
    expect(
      document.querySelectorAll('[data-slot="command-item"]'),
    ).toHaveLength(3);
    // Verify separator is present
    expect(
      document.querySelector('[data-slot="command-separator"]'),
    ).toBeInTheDocument();
  });
});
