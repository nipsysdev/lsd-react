import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../index';

describe('CommandGroup', () => {
  it('renders without crashing', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>Item 1</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    expect(
      document.querySelector('[data-slot="command-group"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>Item 1</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    const group = document.querySelector('[data-slot="command-group"]');
    expect(group).toHaveAttribute('data-slot', 'command-group');
  });

  it('applies base classes correctly', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>Item 1</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    const group = document.querySelector('[data-slot="command-group"]');
    expect(group).toHaveClass('lsd:text-lsd-text-primary');
    expect(group).toHaveClass('lsd:overflow-hidden');
    expect(group).toHaveClass('lsd:p-1');
  });

  it('merges custom className with component classes', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup className="custom-group-class">
            <CommandItem>Item 1</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    const group = document.querySelector('[data-slot="command-group"]');
    expect(group).toHaveClass('custom-group-class');
  });

  it('passes through additional props', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup data-testid="test-group" id="group-1">
            <CommandItem>Item 1</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    const group = document.querySelector('[data-slot="command-group"]');
    expect(group).toHaveAttribute('data-testid', 'test-group');
    expect(group).toHaveAttribute('id', 'group-1');
  });
});
