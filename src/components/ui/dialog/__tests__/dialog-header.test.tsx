import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../index';

describe('DialogHeader', () => {
  it('renders without crashing', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    expect(
      document.querySelector('[data-slot="dialog-header"]'),
    ).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const header = document.querySelector('[data-slot="dialog-header"]');
    expect(header).toHaveClass('lsd:flex');
    expect(header).toHaveClass('lsd:flex-col');
    expect(header).toHaveClass('lsd:gap-2');
    expect(header).toHaveClass('lsd:text-center');
  });

  it('applies data-slot attribute', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const header = document.querySelector('[data-slot="dialog-header"]');
    expect(header).toHaveAttribute('data-slot', 'dialog-header');
  });

  it('merges custom className with component classes', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader className="custom-header-class">
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const header = document.querySelector('[data-slot="dialog-header"]');
    expect(header).toHaveClass('custom-header-class');
  });

  it('passes through additional props', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader data-testid="test-header" id="header-1">
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const header = document.querySelector('[data-slot="dialog-header"]');
    expect(header).toHaveAttribute('data-testid', 'test-header');
    expect(header).toHaveAttribute('id', 'header-1');
  });
});
