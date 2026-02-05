import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from './dialog';

describe('Dialog', () => {
  it('renders without crashing when open', () => {
    render(
      <Dialog open>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('passes through additional props to DialogContent', () => {
    render(
      <Dialog open>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent data-testid="test-dialog">
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const dialog = document.querySelector('[data-slot="dialog-content"]');
    expect(dialog).toHaveAttribute('data-testid', 'test-dialog');
  });
});

describe('DialogTrigger', () => {
  it('renders without crashing', () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const trigger = screen.getByRole('button', { name: 'Open' });
    expect(trigger).toHaveAttribute('data-slot', 'dialog-trigger');
  });

  it('passes through additional props', () => {
    render(
      <Dialog>
        <DialogTrigger data-testid="test-trigger" id="trigger-1">
          Open
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const trigger = screen.getByRole('button', { name: 'Open' });
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });
});

describe('DialogOverlay', () => {
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
      document.querySelector('[data-slot="dialog-overlay"]'),
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
    const overlay = document.querySelector('[data-slot="dialog-overlay"]');
    expect(overlay).toHaveClass('lsd:fixed');
    expect(overlay).toHaveClass('lsd:inset-0');
    expect(overlay).toHaveClass('lsd:z-50');
    expect(overlay).toHaveClass('lsd:bg-black/50');
  });

  it('applies animation classes', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const overlay = document.querySelector('[data-slot="dialog-overlay"]');
    expect(overlay).toHaveClass('lsd:data-[state=open]:animate-in');
    expect(overlay).toHaveClass('lsd:data-[state=closed]:animate-out');
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
    const overlay = document.querySelector('[data-slot="dialog-overlay"]');
    expect(overlay).toHaveAttribute('data-slot', 'dialog-overlay');
  });

  it('merges custom className with component classes', () => {
    render(
      <Dialog open>
        <DialogOverlay className="custom-overlay-class" />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const overlay = document.querySelector('[data-slot="dialog-overlay"]');
    expect(overlay).toHaveClass('custom-overlay-class');
  });
});

describe('DialogContent', () => {
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
    expect(screen.getByRole('dialog')).toBeInTheDocument();
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
    const content = document.querySelector('[data-slot="dialog-content"]');
    expect(content).toHaveClass('lsd:bg-lsd-surface-primary');
    expect(content).toHaveClass('lsd:fixed');
    expect(content).toHaveClass('lsd:top-[50%]');
    expect(content).toHaveClass('lsd:left-[50%]');
    expect(content).toHaveClass('lsd:z-50');
    expect(content).toHaveClass('lsd:grid');
    expect(content).toHaveClass('lsd:w-full');
    expect(content).toHaveClass('lsd:border');
    expect(content).toHaveClass('lsd:border-lsd-border');
    expect(content).toHaveClass('lsd:p-6');
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
    const content = document.querySelector('[data-slot="dialog-content"]');
    expect(content).toHaveAttribute('data-slot', 'dialog-content');
  });

  it('merges custom className with component classes', () => {
    render(
      <Dialog open>
        <DialogContent className="custom-content-class">
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const content = document.querySelector('[data-slot="dialog-content"]');
    expect(content).toHaveClass('custom-content-class');
  });

  it('passes through additional props', () => {
    render(
      <Dialog open>
        <DialogContent data-testid="test-content" id="content-1">
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const content = document.querySelector('[data-slot="dialog-content"]');
    expect(content).toHaveAttribute('data-testid', 'test-content');
    expect(content).toHaveAttribute('id', 'content-1');
  });

  it('renders close button by default', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const closeButton = document.querySelector('[data-slot="dialog-close"]');
    expect(closeButton).toBeInTheDocument();
  });

  it('hides close button when showCloseButton is false', () => {
    render(
      <Dialog open>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const closeButton = document.querySelector('[data-slot="dialog-close"]');
    expect(closeButton).not.toBeInTheDocument();
  });

  it('renders close button with X icon', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const closeButton = document.querySelector('[data-slot="dialog-close"]');
    expect(closeButton?.querySelector('svg')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <p>Custom content</p>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });
});

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

describe('DialogFooter', () => {
  it('renders without crashing', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogFooter>
            <button type="button">Cancel</button>
            <button type="button">Confirm</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    );
    expect(
      document.querySelector('[data-slot="dialog-footer"]'),
    ).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogFooter>
            <button type="button">Cancel</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    );
    const footer = document.querySelector('[data-slot="dialog-footer"]');
    expect(footer).toHaveClass('lsd:flex');
    expect(footer).toHaveClass('lsd:flex-col-reverse');
    expect(footer).toHaveClass('lsd:gap-2');
  });

  it('applies data-slot attribute', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogFooter>
            <button type="button">Cancel</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    );
    const footer = document.querySelector('[data-slot="dialog-footer"]');
    expect(footer).toHaveAttribute('data-slot', 'dialog-footer');
  });

  it('merges custom className with component classes', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogFooter className="custom-footer-class">
            <button type="button">Cancel</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    );
    const footer = document.querySelector('[data-slot="dialog-footer"]');
    expect(footer).toHaveClass('custom-footer-class');
  });
});

describe('DialogTitle', () => {
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
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
  });

  it('renders as a heading', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
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
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveClass('lsd:text-lg');
    expect(title).toHaveClass('lsd:leading-none');
    expect(title).toHaveClass('lsd:font-semibold');
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
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveAttribute('data-slot', 'dialog-title');
  });

  it('merges custom className with component classes', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="custom-title-class">Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveClass('custom-title-class');
  });

  it('passes through additional props', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle data-testid="test-title" id="title-1">
              Title
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveAttribute('data-testid', 'test-title');
    expect(title).toHaveAttribute('id', 'title-1');
  });
});

describe('DialogDescription', () => {
  it('renders without crashing', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const description = screen.getByText('Description');
    expect(description).toHaveClass('lsd:text-lsd-text');
    expect(description).toHaveClass('lsd:text-sm');
  });

  it('applies data-slot attribute', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const description = screen.getByText('Description');
    expect(description).toHaveAttribute('data-slot', 'dialog-description');
  });

  it('merges custom className with component classes', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription className="custom-description-class">
              Description
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const description = screen.getByText('Description');
    expect(description).toHaveClass('custom-description-class');
  });
});

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
    fireEvent.click(close!);
    expect(handleClose).toHaveBeenCalledWith(false);
  });
});
