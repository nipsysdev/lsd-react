import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Popover, PopoverContent, PopoverTrigger } from '../index';

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
