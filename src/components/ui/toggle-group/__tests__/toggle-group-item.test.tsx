import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ToggleGroup, ToggleGroupItem } from '../index';

describe('ToggleGroupItem', () => {
  it('renders as a radio button', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole('radio', { name: 'A' })).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    const item = screen.getByRole('radio', { name: 'A' });
    expect(item).toHaveClass('lsd:min-w-0');
    expect(item).toHaveClass('lsd:flex-1');
    expect(item).toHaveClass('lsd:shrink-0');
    expect(item).toHaveClass('lsd:rounded-none');
    expect(item).toHaveClass('lsd:shadow-none');
    expect(item).toHaveClass('lsd:cursor-pointer');
  });

  it('applies first item border classes', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    );
    const itemA = screen.getByRole('radio', { name: 'A' });
    // First item has lsd:first:border-l (Tailwind first: variant)
    expect(itemA).toHaveClass('lsd:first:border-l');
  });

  it('applies non-first item border classes', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    );
    const itemB = screen.getByRole('radio', { name: 'B' });
    expect(itemB).toHaveClass('lsd:border-l-0');
  });

  it('applies disabled state correctly', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a" disabled>
          A
        </ToggleGroupItem>
      </ToggleGroup>,
    );
    const item = screen.getByRole('radio', { name: 'A' });
    expect(item).toBeDisabled();
    expect(item).toHaveClass('lsd:disabled:cursor-not-allowed');
  });

  it('merges custom className with component classes', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a" className="custom-item-class">
          A
        </ToggleGroupItem>
      </ToggleGroup>,
    );
    const item = screen.getByRole('radio', { name: 'A' });
    expect(item).toHaveClass('custom-item-class');
  });

  it('passes through additional props', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a" data-testid="test-item" id="item-1">
          A
        </ToggleGroupItem>
      </ToggleGroup>,
    );
    const item = screen.getByRole('radio', { name: 'A' });
    expect(item).toHaveAttribute('data-testid', 'test-item');
    expect(item).toHaveAttribute('id', 'item-1');
  });

  it('forwards ref to underlying button element', () => {
    const ref = vi.fn();
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem ref={ref} value="a">
          A
        </ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement);
  });

  it('applies data-slot attribute', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    const item = screen.getByRole('radio', { name: 'A' });
    expect(item).toHaveAttribute('data-slot', 'toggle-group-item');
  });

  it('applies data-state attribute when selected', () => {
    render(
      <ToggleGroup type="single" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    );
    const itemA = screen.getByRole('radio', { name: 'A' });
    expect(itemA).toHaveAttribute('data-state', 'on');
  });

  it('applies data-state attribute when not selected', () => {
    render(
      <ToggleGroup type="single" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    );
    const itemB = screen.getByRole('radio', { name: 'B' });
    expect(itemB).toHaveAttribute('data-state', 'off');
  });
});
