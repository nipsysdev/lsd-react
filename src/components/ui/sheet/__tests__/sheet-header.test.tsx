import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../index';

describe('SheetHeader', () => {
  it('renders without crashing', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(
      document.querySelector('[data-slot="sheet-header"]'),
    ).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const header = document.querySelector('[data-slot="sheet-header"]');
    expect(header).toHaveClass('lsd:flex');
    expect(header).toHaveClass('lsd:flex-col');
    expect(header).toHaveClass('lsd:gap-1.5');
    expect(header).toHaveClass('lsd:p-4');
  });

  it('applies data-slot attribute', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const header = document.querySelector('[data-slot="sheet-header"]');
    expect(header).toHaveAttribute('data-slot', 'sheet-header');
  });

  it('merges custom className with component classes', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader className="custom-header-class">
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const header = document.querySelector('[data-slot="sheet-header"]');
    expect(header).toHaveClass('custom-header-class');
  });

  it('passes through additional props', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader data-testid="test-header" id="header-1">
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const header = document.querySelector('[data-slot="sheet-header"]');
    expect(header).toHaveAttribute('data-testid', 'test-header');
    expect(header).toHaveAttribute('id', 'header-1');
  });
});
