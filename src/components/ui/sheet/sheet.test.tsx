import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './index';

describe('Sheet', () => {
  it('renders without crashing when open', () => {
    render(
      <Sheet open>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('passes through additional props to SheetContent', () => {
    render(
      <Sheet open>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent data-testid="test-sheet">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const sheet = document.querySelector('[data-slot="sheet-content"]');
    expect(sheet).toHaveAttribute('data-testid', 'test-sheet');
  });
});

describe('SheetTrigger', () => {
  it('renders without crashing', () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const trigger = screen.getByRole('button', { name: 'Open' });
    expect(trigger).toHaveAttribute('data-slot', 'sheet-trigger');
  });

  it('passes through additional props', () => {
    render(
      <Sheet>
        <SheetTrigger data-testid="test-trigger" id="trigger-1">
          Open
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const trigger = screen.getByRole('button', { name: 'Open' });
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });
});

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

describe('SheetContent', () => {
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
    expect(screen.getByRole('dialog')).toBeInTheDocument();
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
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass('lsd:bg-background');
    expect(content).toHaveClass('lsd:fixed');
    expect(content).toHaveClass('lsd:z-50');
    expect(content).toHaveClass('lsd:flex');
    expect(content).toHaveClass('lsd:flex-col');
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
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveAttribute('data-slot', 'sheet-content');
  });

  it('merges custom className with component classes', () => {
    render(
      <Sheet open>
        <SheetContent className="custom-content-class">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass('custom-content-class');
  });

  it('passes through additional props', () => {
    render(
      <Sheet open>
        <SheetContent data-testid="test-content" id="content-1">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveAttribute('data-testid', 'test-content');
    expect(content).toHaveAttribute('id', 'content-1');
  });

  it('renders children correctly', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <p>Custom content</p>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });

  it('applies right side classes by default', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass('lsd:inset-y-0');
    expect(content).toHaveClass('lsd:right-0');
    expect(content).toHaveClass('lsd:h-full');
    expect(content).toHaveClass('lsd:w-3/4');
    expect(content).toHaveClass('lsd:border-l');
  });

  it('applies left side classes when side="left"', () => {
    render(
      <Sheet open>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass('lsd:inset-y-0');
    expect(content).toHaveClass('lsd:left-0');
    expect(content).toHaveClass('lsd:h-full');
    expect(content).toHaveClass('lsd:w-3/4');
    expect(content).toHaveClass('lsd:border-r');
  });

  it('applies top side classes when side="top"', () => {
    render(
      <Sheet open>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass('lsd:inset-x-0');
    expect(content).toHaveClass('lsd:top-0');
    expect(content).toHaveClass('lsd:h-auto');
    expect(content).toHaveClass('lsd:border-b');
  });

  it('applies bottom side classes when side="bottom"', () => {
    render(
      <Sheet open>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass('lsd:inset-x-0');
    expect(content).toHaveClass('lsd:bottom-0');
    expect(content).toHaveClass('lsd:h-auto');
    expect(content).toHaveClass('lsd:border-t');
  });

  it('renders close button', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const closeButton = document.querySelector(
      '[data-slot="sheet-content"] button',
    );
    expect(closeButton).toBeInTheDocument();
  });
});

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

describe('SheetFooter', () => {
  it('renders without crashing', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetFooter>
            <button type="button">Cancel</button>
            <button type="button">Confirm</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );
    expect(
      document.querySelector('[data-slot="sheet-footer"]'),
    ).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetFooter>
            <button type="button">Cancel</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );
    const footer = document.querySelector('[data-slot="sheet-footer"]');
    expect(footer).toHaveClass('lsd:mt-auto');
    expect(footer).toHaveClass('lsd:flex');
    expect(footer).toHaveClass('lsd:flex-col');
    expect(footer).toHaveClass('lsd:gap-2');
    expect(footer).toHaveClass('lsd:p-4');
  });

  it('applies data-slot attribute', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetFooter>
            <button type="button">Cancel</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );
    const footer = document.querySelector('[data-slot="sheet-footer"]');
    expect(footer).toHaveAttribute('data-slot', 'sheet-footer');
  });

  it('merges custom className with component classes', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetFooter className="custom-footer-class">
            <button type="button">Cancel</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );
    const footer = document.querySelector('[data-slot="sheet-footer"]');
    expect(footer).toHaveClass('custom-footer-class');
  });
});

describe('SheetTitle', () => {
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
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
  });

  it('renders as a heading', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
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
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveClass('lsd:text-foreground');
    expect(title).toHaveClass('lsd:font-semibold');
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
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveAttribute('data-slot', 'sheet-title');
  });

  it('merges custom className with component classes', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="custom-title-class">Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveClass('custom-title-class');
  });

  it('passes through additional props', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle data-testid="test-title" id="title-1">
              Title
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveAttribute('data-testid', 'test-title');
    expect(title).toHaveAttribute('id', 'title-1');
  });
});

describe('SheetDescription', () => {
  it('renders without crashing', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const description = screen.getByText('Description');
    expect(description).toHaveClass('lsd:text-muted-foreground');
    expect(description).toHaveClass('lsd:text-sm');
  });

  it('applies data-slot attribute', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const description = screen.getByText('Description');
    expect(description).toHaveAttribute('data-slot', 'sheet-description');
  });

  it('merges custom className with component classes', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription className="custom-description-class">
              Description
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const description = screen.getByText('Description');
    expect(description).toHaveClass('custom-description-class');
  });
});
