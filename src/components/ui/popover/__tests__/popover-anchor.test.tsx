import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from '../index';

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
