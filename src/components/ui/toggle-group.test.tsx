import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';

describe('ToggleGroup', () => {
  it('renders without crashing', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('renders as a group role', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    const group = screen.getByRole('group');
    expect(group).toHaveClass('lsd:flex');
    expect(group).toHaveClass('lsd:w-fit');
    expect(group).toHaveClass('lsd:items-center');
  });

  it('applies default size classes correctly', () => {
    render(
      <ToggleGroup type="single" size="default">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    const item = screen.getByRole('radio', { name: 'A' });
    expect(item).toHaveClass('lsd:h-10');
    expect(item).toHaveClass('lsd:px-3');
  });

  it('applies small size classes correctly', () => {
    render(
      <ToggleGroup type="single" size="sm">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    const item = screen.getByRole('radio', { name: 'A' });
    expect(item).toHaveClass('lsd:h-8');
    expect(item).toHaveClass('lsd:px-2');
  });

  it('applies large size classes correctly', () => {
    render(
      <ToggleGroup type="single" size="lg">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    const item = screen.getByRole('radio', { name: 'A' });
    expect(item).toHaveClass('lsd:h-12');
    expect(item).toHaveClass('lsd:px-4');
  });

  it('uses default size when not specified', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    const item = screen.getByRole('radio', { name: 'A' });
    expect(item).toHaveClass('lsd:h-10');
  });

  it('handles single selection', () => {
    render(
      <ToggleGroup type="single" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>,
    );
    const itemA = screen.getByRole('radio', { name: 'A' });
    expect(itemA).toHaveAttribute('data-state', 'on');
  });

  it('handles multiple selection', () => {
    render(
      <ToggleGroup type="multiple" defaultValue={['a', 'c']}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>,
    );
    const itemA = screen.getByRole('button', { name: 'A' });
    const itemB = screen.getByRole('button', { name: 'B' });
    const itemC = screen.getByRole('button', { name: 'C' });
    expect(itemA).toHaveAttribute('data-state', 'on');
    expect(itemB).toHaveAttribute('data-state', 'off');
    expect(itemC).toHaveAttribute('data-state', 'on');
  });

  it('handles click events', () => {
    const handleValueChange = vi.fn();
    render(
      <ToggleGroup type="single" onValueChange={handleValueChange}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    );
    fireEvent.click(screen.getByRole('radio', { name: 'B' }));
    expect(handleValueChange).toHaveBeenCalledWith('b');
  });

  it('applies disabled state correctly', () => {
    render(
      <ToggleGroup type="single" disabled>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    );
    const itemA = screen.getByRole('radio', { name: 'A' });
    expect(itemA).toBeDisabled();
  });

  it('merges custom className with component classes', () => {
    render(
      <ToggleGroup type="single" className="custom-group-class">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    const group = screen.getByRole('group');
    expect(group).toHaveClass('custom-group-class');
  });

  it('passes through additional props', () => {
    render(
      <ToggleGroup
        type="single"
        data-testid="test-toggle-group"
        id="toggle-group-1"
      >
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    const group = screen.getByRole('group');
    expect(group).toHaveAttribute('data-testid', 'test-toggle-group');
    expect(group).toHaveAttribute('id', 'toggle-group-1');
  });

  it('forwards ref to underlying root element', () => {
    const ref = vi.fn();
    render(
      <ToggleGroup type="single" ref={ref}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(ref).toHaveBeenCalled();
  });

  it('renders multiple items correctly', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole('radio', { name: 'A' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'B' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'C' })).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>,
    );
    const group = screen.getByRole('group');
    expect(group).toHaveAttribute('data-slot', 'toggle-group');
  });
});

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
    // First item has first:lsd:border-l (Tailwind first: variant)
    expect(itemA).toHaveClass('first:lsd:border-l');
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
