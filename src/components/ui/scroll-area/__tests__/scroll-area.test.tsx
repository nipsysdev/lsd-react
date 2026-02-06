import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ScrollArea } from '../index';

describe('ScrollArea', () => {
  it('renders without crashing', () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    expect(
      document.querySelector('[data-slot="scroll-area"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    const scrollArea = document.querySelector('[data-slot="scroll-area"]');
    expect(scrollArea).toHaveAttribute('data-slot', 'scroll-area');
  });

  it('applies base classes correctly', () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    const scrollArea = document.querySelector('[data-slot="scroll-area"]');
    expect(scrollArea).toHaveClass('lsd:relative');
  });

  it('renders viewport', () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    expect(
      document.querySelector('[data-slot="scroll-area-viewport"]'),
    ).toBeInTheDocument();
  });

  it('viewport applies data-slot attribute', () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    const viewport = document.querySelector(
      '[data-slot="scroll-area-viewport"]',
    );
    expect(viewport).toHaveAttribute('data-slot', 'scroll-area-viewport');
  });

  it('viewport applies base classes correctly', () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    const viewport = document.querySelector(
      '[data-slot="scroll-area-viewport"]',
    );
    expect(viewport).toHaveClass('lsd:size-full');
    expect(viewport).toHaveClass('lsd:rounded-[inherit]');
    expect(viewport).toHaveClass('lsd:transition-[color,box-shadow]');
    expect(viewport).toHaveClass('lsd:outline-none');
  });

  it('merges custom className with component classes', () => {
    render(
      <ScrollArea className="custom-scroll-area-class">
        <div>Content</div>
      </ScrollArea>,
    );
    const scrollArea = document.querySelector('[data-slot="scroll-area"]');
    expect(scrollArea).toHaveClass('custom-scroll-area-class');
  });

  it('passes through additional props', () => {
    render(
      <ScrollArea data-testid="test-scroll-area" id="scroll-area-1">
        <div>Content</div>
      </ScrollArea>,
    );
    const scrollArea = document.querySelector('[data-slot="scroll-area"]');
    expect(scrollArea).toHaveAttribute('data-testid', 'test-scroll-area');
    expect(scrollArea).toHaveAttribute('id', 'scroll-area-1');
  });

  it('renders children correctly', () => {
    render(
      <ScrollArea>
        <p>Content 1</p>
        <p>Content 2</p>
        <button type="button">Action</button>
      </ScrollArea>,
    );
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });
});
