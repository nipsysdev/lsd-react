import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from '../index';

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

  it('renders with all subcomponents', () => {
    render(
      <Popover open>
        <PopoverAnchor />
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <p>Popover Content</p>
        </PopoverContent>
      </Popover>,
    );
    // Verify anchor is present
    expect(
      document.querySelector('[data-slot="popover-anchor"]'),
    ).toBeInTheDocument();
    // Verify trigger is present
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
    // Verify content is present
    expect(
      document.querySelector('[data-slot="popover-content"]'),
    ).toBeInTheDocument();
    // Verify content text is present
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  });
});
