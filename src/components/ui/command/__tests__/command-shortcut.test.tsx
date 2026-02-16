import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '../index';

describe('CommandShortcut', () => {
  it('renders without crashing', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>
            Item 1<CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>,
    );
    expect(
      document.querySelector('[data-slot="command-shortcut"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>
            Item 1<CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>,
    );
    const shortcut = document.querySelector('[data-slot="command-shortcut"]');
    expect(shortcut).toHaveAttribute('data-slot', 'command-shortcut');
  });

  it('applies base classes correctly', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>
            Item 1<CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>,
    );
    const shortcut = document.querySelector('[data-slot="command-shortcut"]');
    expect(shortcut).toHaveClass('lsd:text-lsd-text-primary');
    expect(shortcut).toHaveClass('lsd:ml-auto');
    expect(shortcut).toHaveClass('lsd:text-xs');
    expect(shortcut).toHaveClass('lsd:tracking-widest');
  });

  it('merges custom className with component classes', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>
            Item 1
            <CommandShortcut className="custom-shortcut-class">
              ⌘K
            </CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>,
    );
    const shortcut = document.querySelector('[data-slot="command-shortcut"]');
    expect(shortcut).toHaveClass('custom-shortcut-class');
  });

  it('passes through additional props', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>
            Item 1
            <CommandShortcut data-testid="test-shortcut" id="shortcut-1">
              ⌘K
            </CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>,
    );
    const shortcut = document.querySelector('[data-slot="command-shortcut"]');
    expect(shortcut).toHaveAttribute('data-testid', 'test-shortcut');
    expect(shortcut).toHaveAttribute('id', 'shortcut-1');
  });

  it('renders children correctly', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>
            Item 1<CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>,
    );
    expect(screen.getByText('⌘K')).toBeInTheDocument();
  });
});
