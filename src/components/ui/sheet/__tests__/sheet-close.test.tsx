import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Sheet, SheetClose, SheetContent } from '../index';

describe('SheetClose', () => {
  it('renders without crashing', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetClose />
        </SheetContent>
      </Sheet>,
    );
    expect(
      document.querySelector('[data-slot="sheet-close"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetClose />
        </SheetContent>
      </Sheet>,
    );
    const close = document.querySelector('[data-slot="sheet-close"]');
    expect(close).toHaveAttribute('data-slot', 'sheet-close');
  });

  it('passes through additional props', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetClose data-testid="test-close" id="close-1" />
        </SheetContent>
      </Sheet>,
    );
    const close = document.querySelector('[data-slot="sheet-close"]');
    expect(close).toHaveAttribute('data-testid', 'test-close');
    expect(close).toHaveAttribute('id', 'close-1');
  });

  it('handles click events', () => {
    const handleClose = vi.fn();
    render(
      <Sheet open onOpenChange={handleClose}>
        <SheetContent>
          <SheetClose />
        </SheetContent>
      </Sheet>,
    );
    const close = document.querySelector('[data-slot="sheet-close"]');
    if (close) {
      fireEvent.click(close);
      expect(handleClose).toHaveBeenCalledWith(false);
    }
  });
});
