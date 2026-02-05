import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from './popover';

describe('Popover', () => {
  it('renders without crashing when open', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    expect(
      document.querySelector('[data-slot="popover-content"]'),
    ).toBeInTheDocument();
  });

  it('passes through additional props to PopoverContent', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent data-testid="test-popover">Content</PopoverContent>
      </Popover>,
    );
    const popover = document.querySelector('[data-slot="popover-content"]');
    expect(popover).toHaveAttribute('data-testid', 'test-popover');
  });
});

describe('PopoverTrigger', () => {
  it('renders without crashing', () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const trigger = screen.getByRole('button', { name: 'Open' });
    expect(trigger).toHaveAttribute('data-slot', 'popover-trigger');
  });

  it('passes through additional props', () => {
    render(
      <Popover>
        <PopoverTrigger data-testid="test-trigger" id="trigger-1">
          Open
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const trigger = screen.getByRole('button', { name: 'Open' });
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });
});

describe('PopoverContent', () => {
  it('renders without crashing when open', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    expect(
      document.querySelector('[data-slot="popover-content"]'),
    ).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveClass('lsd:bg-lsd-surface-primary');
    expect(content).toHaveClass('lsd:text-lsd-text');
    expect(content).toHaveClass('lsd:z-50');
    expect(content).toHaveClass('lsd:w-72');
    expect(content).toHaveClass('lsd:border');
    expect(content).toHaveClass('lsd:border-lsd-border');
    expect(content).toHaveClass('lsd:p-4');
    expect(content).toHaveClass('lsd:shadow-md');
  });

  it('applies animation classes', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveClass('lsd:data-[state=open]:animate-in');
    expect(content).toHaveClass('lsd:data-[state=closed]:animate-out');
  });

  it('applies data-slot attribute', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveAttribute('data-slot', 'popover-content');
  });

  it('merges custom className with component classes', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="custom-content-class">
          Content
        </PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveClass('custom-content-class');
  });

  it('passes through additional props', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent data-testid="test-content" id="content-1">
          Content
        </PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveAttribute('data-testid', 'test-content');
    expect(content).toHaveAttribute('id', 'content-1');
  });

  it('renders children correctly', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <p>Custom content</p>
        </PopoverContent>
      </Popover>,
    );
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });

  it('applies bottom animation classes', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveClass('lsd:data-[side=bottom]:slide-in-from-top-2');
  });
});

describe('PopoverAnchor', () => {
  it('renders without crashing', () => {
    render(
      <Popover>
        <PopoverAnchor />
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    expect(
      document.querySelector('[data-slot="popover-anchor"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Popover>
        <PopoverAnchor />
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const anchor = document.querySelector('[data-slot="popover-anchor"]');
    expect(anchor).toHaveAttribute('data-slot', 'popover-anchor');
  });

  it('passes through additional props', () => {
    render(
      <Popover>
        <PopoverAnchor data-testid="test-anchor" id="anchor-1" />
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const anchor = document.querySelector('[data-slot="popover-anchor"]');
    expect(anchor).toHaveAttribute('data-testid', 'test-anchor');
    expect(anchor).toHaveAttribute('id', 'anchor-1');
  });
});
