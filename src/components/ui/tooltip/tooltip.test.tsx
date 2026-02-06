import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './index';

describe('TooltipProvider', () => {
  it('renders without crashing', () => {
    render(
      <TooltipProvider>
        <div>Test content</div>
      </TooltipProvider>,
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('passes through additional props', () => {
    render(
      <TooltipProvider delayDuration={500}>
        <div>Test content</div>
      </TooltipProvider>,
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});

describe('Tooltip', () => {
  it('renders without crashing', () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('includes TooltipProvider', () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('passes through additional props', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });
});

describe('TooltipTrigger', () => {
  it('renders without crashing', () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    const trigger = document.querySelector('[data-slot="tooltip-trigger"]');
    expect(trigger).toHaveAttribute('data-slot', 'tooltip-trigger');
  });

  it('passes through additional props', () => {
    render(
      <Tooltip>
        <TooltipTrigger data-testid="test-trigger" id="trigger-1">
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    const trigger = document.querySelector('[data-slot="tooltip-trigger"]');
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });

  it('renders children correctly', () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });
});

describe('TooltipContent', () => {
  it('renders without crashing when open', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(
      document.querySelector('[data-slot="tooltip-content"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    const content = document.querySelector('[data-slot="tooltip-content"]');
    expect(content).toHaveAttribute('data-slot', 'tooltip-content');
  });

  it('applies base classes correctly', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    const content = document.querySelector('[data-slot="tooltip-content"]');
    expect(content).toHaveClass('lsd:bg-foreground');
    expect(content).toHaveClass('lsd:text-background');
    expect(content).toHaveClass('lsd:animate-in');
    expect(content).toHaveClass('lsd:fade-in-0');
    expect(content).toHaveClass('lsd:zoom-in-95');
    expect(content).toHaveClass('lsd:z-50');
    expect(content).toHaveClass('lsd:w-fit');
    expect(content).toHaveClass('lsd:rounded-md');
    expect(content).toHaveClass('lsd:px-3');
    expect(content).toHaveClass('lsd:py-1.5');
    expect(content).toHaveClass('lsd:text-xs');
  });

  it('applies animation classes for closed state', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    const content = document.querySelector('[data-slot="tooltip-content"]');
    expect(content).toHaveClass('lsd:data-[state=closed]:animate-out');
    expect(content).toHaveClass('lsd:data-[state=closed]:fade-out-0');
    expect(content).toHaveClass('lsd:data-[state=closed]:zoom-out-95');
  });

  it('applies slide-in classes for different sides', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    const content = document.querySelector('[data-slot="tooltip-content"]');
    expect(content).toHaveClass('lsd:data-[side=bottom]:slide-in-from-top-2');
    expect(content).toHaveClass('lsd:data-[side=left]:slide-in-from-right-2');
    expect(content).toHaveClass('lsd:data-[side=right]:slide-in-from-left-2');
    expect(content).toHaveClass('lsd:data-[side=top]:slide-in-from-bottom-2');
  });

  it('merges custom className with component classes', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent className="custom-content-class">
          Tooltip content
        </TooltipContent>
      </Tooltip>,
    );
    const content = document.querySelector('[data-slot="tooltip-content"]');
    expect(content).toHaveClass('custom-content-class');
  });

  it('passes through additional props', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent data-testid="test-content" id="content-1">
          Tooltip content
        </TooltipContent>
      </Tooltip>,
    );
    const content = document.querySelector('[data-slot="tooltip-content"]');
    expect(content).toHaveAttribute('data-testid', 'test-content');
    expect(content).toHaveAttribute('id', 'content-1');
  });

  it('renders children correctly', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
          <span>Additional info</span>
        </TooltipContent>
      </Tooltip>,
    );
    expect(screen.getAllByText('Tooltip content')).toHaveLength(2); // One visible, one for accessibility
    expect(screen.getAllByText('Additional info')).toHaveLength(2);
  });

  it('renders arrow element', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    const content = document.querySelector('[data-slot="tooltip-content"]');
    const arrow = content?.querySelector('svg');
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveClass('lsd:bg-foreground');
    expect(arrow).toHaveClass('fill-foreground');
    expect(arrow).toHaveClass('lsd:z-50');
    expect(arrow).toHaveClass('lsd:size-2.5');
    expect(arrow).toHaveClass('lsd:translate-y-[calc(-50%_-_2px)]');
    expect(arrow).toHaveClass('lsd:rotate-45');
    expect(arrow).toHaveClass('lsd:rounded-[2px]');
  });
});
