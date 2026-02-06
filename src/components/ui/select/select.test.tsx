import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './index';

describe('Select', () => {
  it('renders without crashing', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectItem value="option-2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('passes through additional props to SelectContent', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent data-testid="test-select">
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const select = document.querySelector('[data-slot="select-content"]');
    expect(select).toHaveAttribute('data-testid', 'test-select');
  });
});

describe('SelectGroup', () => {
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
    expect(
      document.querySelector('[data-slot="select-group"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="option-1">Option 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    const group = document.querySelector('[data-slot="select-group"]');
    expect(group).toHaveAttribute('data-slot', 'select-group');
  });

  it('passes through additional props', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup data-testid="test-group" id="group-1">
            <SelectItem value="option-1">Option 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    const group = document.querySelector('[data-slot="select-group"]');
    expect(group).toHaveAttribute('data-testid', 'test-group');
    expect(group).toHaveAttribute('id', 'group-1');
  });
});

describe('SelectValue', () => {
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
    expect(screen.getByText('Select an option')).toBeInTheDocument();
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
    const value = document.querySelector('[data-slot="select-value"]');
    expect(value).toHaveAttribute('data-slot', 'select-value');
  });

  it('renders selected value', () => {
    render(
      <Select value="option-1">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });
});

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

describe('SelectContent', () => {
  it('renders without crashing when open', () => {
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
      document.querySelector('[data-slot="select-content"]'),
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
    const content = document.querySelector('[data-slot="select-content"]');
    expect(content).toHaveAttribute('data-slot', 'select-content');
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
    const content = document.querySelector('[data-slot="select-content"]');
    expect(content).toHaveClass('lsd:bg-lsd-surface-primary');
    expect(content).toHaveClass('lsd:text-lsd-text');
    expect(content).toHaveClass('lsd:border');
    expect(content).toHaveClass('lsd:border-lsd-border');
  });

  it('applies animation classes', () => {
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
    const content = document.querySelector('[data-slot="select-content"]');
    expect(content).toHaveClass('lsd:data-[state=open]:animate-in');
    expect(content).toHaveClass('lsd:data-[state=closed]:animate-out');
  });

  it('merges custom className with component classes', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent className="custom-content-class">
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const content = document.querySelector('[data-slot="select-content"]');
    expect(content).toHaveClass('custom-content-class');
  });

  it('passes through additional props', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent data-testid="test-content" id="content-1">
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const content = document.querySelector('[data-slot="select-content"]');
    expect(content).toHaveAttribute('data-testid', 'test-content');
    expect(content).toHaveAttribute('id', 'content-1');
  });

  it('renders children correctly', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <p>Custom content</p>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });
});

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
