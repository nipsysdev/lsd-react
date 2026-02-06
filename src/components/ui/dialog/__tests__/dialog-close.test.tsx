import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Dialog, DialogClose, DialogContent } from '../index';

describe('DialogClose', () => {
  it('renders without crashing', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogClose />
        </DialogContent>
      </Dialog>,
    );
    expect(
      document.querySelector('[data-slot="dialog-close"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogClose />
        </DialogContent>
      </Dialog>,
    );
    const close = document.querySelector('[data-slot="dialog-close"]');
    expect(close).toHaveAttribute('data-slot', 'dialog-close');
  });

  it('passes through additional props', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogClose data-testid="test-close" id="close-1" />
        </DialogContent>
      </Dialog>,
    );
    const close = document.querySelector('[data-slot="dialog-close"]');
    expect(close).toHaveAttribute('data-testid', 'test-close');
    expect(close).toHaveAttribute('id', 'close-1');
  });

  it('handles click events', () => {
    const handleClose = vi.fn();
    render(
      <Dialog open onOpenChange={handleClose}>
        <DialogContent>
          <DialogClose />
        </DialogContent>
      </Dialog>,
    );
    const close = document.querySelector('[data-slot="dialog-close"]');
    if (close) {
      fireEvent.click(close);
      expect(handleClose).toHaveBeenCalledWith(false);
    }
  });
});
