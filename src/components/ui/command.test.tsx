import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command';

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
});

describe('CommandDialog', () => {
  it('renders without crashing', () => {
    render(
      <CommandDialog open>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </CommandDialog>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders with default title and description', () => {
    render(
      <CommandDialog open>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </CommandDialog>,
    );
    expect(screen.getByText('Command Palette')).toBeInTheDocument();
    expect(
      screen.getByText('Search for a command to run...'),
    ).toBeInTheDocument();
  });

  it('renders with custom title and description', () => {
    render(
      <CommandDialog open title="Custom Title" description="Custom Description">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </CommandDialog>,
    );
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });

  it('merges custom className with component classes', () => {
    render(
      <CommandDialog open className="custom-dialog-class">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </CommandDialog>,
    );
    const dialogContent = screen.getByRole('dialog');
    expect(dialogContent).toHaveClass('custom-dialog-class');
  });

  it('passes through additional props', () => {
    render(
      <CommandDialog open data-testid="test-dialog">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </CommandDialog>,
    );
    const dialogContent = screen.getByRole('dialog');
    expect(dialogContent).toBeInTheDocument();
  });
});

describe('CommandInput', () => {
  it('renders without crashing', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    expect(
      document.querySelector('[data-slot="command-input-wrapper"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute to wrapper', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const wrapper = document.querySelector(
      '[data-slot="command-input-wrapper"]',
    );
    expect(wrapper).toHaveAttribute('data-slot', 'command-input-wrapper');
  });

  it('applies data-slot attribute to input', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const input = document.querySelector('[data-slot="command-input"]');
    expect(input).toHaveAttribute('data-slot', 'command-input');
  });

  it('renders search icon', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const wrapper = document.querySelector(
      '[data-slot="command-input-wrapper"]',
    );
    expect(wrapper?.querySelector('svg')).toBeInTheDocument();
  });

  it('applies base classes to wrapper', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const wrapper = document.querySelector(
      '[data-slot="command-input-wrapper"]',
    );
    expect(wrapper).toHaveClass('lsd:flex');
    expect(wrapper).toHaveClass('lsd:h-9');
    expect(wrapper).toHaveClass('lsd:items-center');
    expect(wrapper).toHaveClass('lsd:gap-2');
    expect(wrapper).toHaveClass('lsd:border-b');
    expect(wrapper).toHaveClass('lsd:border-lsd-border');
    expect(wrapper).toHaveClass('lsd:px-3');
  });

  it('applies base classes to input', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const input = document.querySelector('[data-slot="command-input"]');
    expect(input).toHaveClass('lsd:flex');
    expect(input).toHaveClass('lsd:h-10');
    expect(input).toHaveClass('lsd:w-full');
    expect(input).toHaveClass('lsd:rounded-md');
    expect(input).toHaveClass('lsd:bg-transparent');
    expect(input).toHaveClass('lsd:py-3');
    expect(input).toHaveClass('lsd:text-sm');
  });

  it('merges custom className with component classes', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." className="custom-input-class" />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const input = document.querySelector('[data-slot="command-input"]');
    expect(input).toHaveClass('custom-input-class');
  });

  it('passes through additional props', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." data-testid="test-input" />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const input = document.querySelector('[data-slot="command-input"]');
    expect(input).toHaveAttribute('data-testid', 'test-input');
  });
});

describe('CommandList', () => {
  it('renders without crashing', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    expect(
      document.querySelector('[data-slot="command-list"]'),
    ).toBeInTheDocument();
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
    const list = document.querySelector('[data-slot="command-list"]');
    expect(list).toHaveAttribute('data-slot', 'command-list');
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
    const list = document.querySelector('[data-slot="command-list"]');
    expect(list).toHaveClass('lsd:max-h-[300px]');
    expect(list).toHaveClass('lsd:scroll-py-1');
    expect(list).toHaveClass('lsd:overflow-x-hidden');
    expect(list).toHaveClass('lsd:overflow-y-auto');
  });

  it('merges custom className with component classes', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList className="custom-list-class">
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const list = document.querySelector('[data-slot="command-list"]');
    expect(list).toHaveClass('custom-list-class');
  });

  it('passes through additional props', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList data-testid="test-list">
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const list = document.querySelector('[data-slot="command-list"]');
    expect(list).toHaveAttribute('data-testid', 'test-list');
  });
});

describe('CommandEmpty', () => {
  it('renders without crashing', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>,
    );
    expect(
      document.querySelector('[data-slot="command-empty"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>,
    );
    const empty = document.querySelector('[data-slot="command-empty"]');
    expect(empty).toHaveAttribute('data-slot', 'command-empty');
  });

  it('applies base classes correctly', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>,
    );
    const empty = document.querySelector('[data-slot="command-empty"]');
    expect(empty).toHaveClass('lsd:py-6');
    expect(empty).toHaveClass('lsd:text-center');
    expect(empty).toHaveClass('lsd:text-sm');
  });

  it('renders children correctly', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>,
    );
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });
});

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
    expect(group).toHaveClass('lsd:text-lsd-text');
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

describe('CommandItem', () => {
  it('renders without crashing', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    expect(
      document.querySelector('[data-slot="command-item"]'),
    ).toBeInTheDocument();
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
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveAttribute('data-slot', 'command-item');
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
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveClass('lsd:relative');
    expect(item).toHaveClass('lsd:flex');
    expect(item).toHaveClass('lsd:cursor-default');
    expect(item).toHaveClass('lsd:items-center');
    expect(item).toHaveClass('lsd:gap-2');
    expect(item).toHaveClass('lsd:rounded-sm');
    expect(item).toHaveClass('lsd:px-2');
    expect(item).toHaveClass('lsd:py-1.5');
    expect(item).toHaveClass('lsd:text-sm');
  });

  it('applies selected state classes', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveClass(
      'lsd:data-[selected=true]:bg-lsd-surface-secondary',
    );
    expect(item).toHaveClass('lsd:data-[selected=true]:text-lsd-text');
  });

  it('applies disabled state classes', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem disabled>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveClass('lsd:data-[disabled=true]:pointer-events-none');
    expect(item).toHaveClass('lsd:data-[disabled=true]:opacity-50');
  });

  it('merges custom className with component classes', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem className="custom-item-class">Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveClass('custom-item-class');
  });

  it('passes through additional props', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem data-testid="test-item">Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveAttribute('data-testid', 'test-item');
  });

  it('renders children correctly', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>
            <span>Item 1</span>
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>,
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('⌘K')).toBeInTheDocument();
  });
});

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
    expect(shortcut).toHaveClass('lsd:text-lsd-text');
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
