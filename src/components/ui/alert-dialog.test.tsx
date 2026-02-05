import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog';

describe('AlertDialog', () => {
  it('renders without crashing when open', () => {
    render(
      <AlertDialog open>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description</AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
  });

  it('passes through additional props to AlertDialogContent', () => {
    render(
      <AlertDialog open>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent data-testid="test-alert-dialog">
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description</AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const alertDialog = document.querySelector(
      '[data-slot="alert-dialog-content"]',
    );
    expect(alertDialog).toHaveAttribute('data-testid', 'test-alert-dialog');
  });
});

describe('AlertDialogTrigger', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description</AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description</AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const trigger = screen.getByRole('button', { name: 'Open' });
    expect(trigger).toHaveAttribute('data-slot', 'alert-dialog-trigger');
  });

  it('passes through additional props', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger data-testid="test-trigger" id="trigger-1">
          Open
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description</AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const trigger = screen.getByRole('button', { name: 'Open' });
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });
});

describe('AlertDialogOverlay', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(
      document.querySelector('[data-slot="alert-dialog-overlay"]'),
    ).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const overlay = document.querySelector(
      '[data-slot="alert-dialog-overlay"]',
    );
    expect(overlay).toHaveClass('lsd:fixed');
    expect(overlay).toHaveClass('lsd:inset-0');
    expect(overlay).toHaveClass('lsd:z-50');
    expect(overlay).toHaveClass('lsd:bg-black/50');
  });

  it('applies animation classes', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const overlay = document.querySelector(
      '[data-slot="alert-dialog-overlay"]',
    );
    expect(overlay).toHaveClass('lsd:data-[state=open]:animate-in');
    expect(overlay).toHaveClass('lsd:data-[state=closed]:animate-out');
  });

  it('applies data-slot attribute', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const overlay = document.querySelector(
      '[data-slot="alert-dialog-overlay"]',
    );
    expect(overlay).toHaveAttribute('data-slot', 'alert-dialog-overlay');
  });

  it('merges custom className with component classes', () => {
    render(
      <AlertDialog open>
        <AlertDialogOverlay className="custom-overlay-class" />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const overlay = document.querySelector(
      '[data-slot="alert-dialog-overlay"]',
    );
    expect(overlay).toHaveClass('custom-overlay-class');
  });
});

describe('AlertDialogContent', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const content = document.querySelector(
      '[data-slot="alert-dialog-content"]',
    );
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
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const content = document.querySelector(
      '[data-slot="alert-dialog-content"]',
    );
    expect(content).toHaveAttribute('data-slot', 'alert-dialog-content');
  });

  it('merges custom className with component classes', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent className="custom-content-class">
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const content = document.querySelector(
      '[data-slot="alert-dialog-content"]',
    );
    expect(content).toHaveClass('custom-content-class');
  });

  it('passes through additional props', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent data-testid="test-content" id="content-1">
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const content = document.querySelector(
      '[data-slot="alert-dialog-content"]',
    );
    expect(content).toHaveAttribute('data-testid', 'test-content');
    expect(content).toHaveAttribute('id', 'content-1');
  });

  it('renders children correctly', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <p>Custom content</p>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });
});

describe('AlertDialogHeader', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(
      document.querySelector('[data-slot="alert-dialog-header"]'),
    ).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const header = document.querySelector('[data-slot="alert-dialog-header"]');
    expect(header).toHaveClass('lsd:flex');
    expect(header).toHaveClass('lsd:flex-col');
    expect(header).toHaveClass('lsd:gap-2');
    expect(header).toHaveClass('lsd:text-center');
  });

  it('applies data-slot attribute', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const header = document.querySelector('[data-slot="alert-dialog-header"]');
    expect(header).toHaveAttribute('data-slot', 'alert-dialog-header');
  });

  it('merges custom className with component classes', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader className="custom-header-class">
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const header = document.querySelector('[data-slot="alert-dialog-header"]');
    expect(header).toHaveClass('custom-header-class');
  });

  it('passes through additional props', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader data-testid="test-header" id="header-1">
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const header = document.querySelector('[data-slot="alert-dialog-header"]');
    expect(header).toHaveAttribute('data-testid', 'test-header');
    expect(header).toHaveAttribute('id', 'header-1');
  });
});

describe('AlertDialogFooter', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <button type="button">Cancel</button>
            <button type="button">Confirm</button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(
      document.querySelector('[data-slot="alert-dialog-footer"]'),
    ).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <button type="button">Cancel</button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const footer = document.querySelector('[data-slot="alert-dialog-footer"]');
    expect(footer).toHaveClass('lsd:flex');
    expect(footer).toHaveClass('lsd:flex-col-reverse');
    expect(footer).toHaveClass('lsd:gap-2');
  });

  it('applies data-slot attribute', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <button type="button">Cancel</button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const footer = document.querySelector('[data-slot="alert-dialog-footer"]');
    expect(footer).toHaveAttribute('data-slot', 'alert-dialog-footer');
  });

  it('merges custom className with component classes', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter className="custom-footer-class">
            <button type="button">Cancel</button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const footer = document.querySelector('[data-slot="alert-dialog-footer"]');
    expect(footer).toHaveClass('custom-footer-class');
  });
});

describe('AlertDialogTitle', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
  });

  it('renders as a heading', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveClass('lsd:text-lg');
    expect(title).toHaveClass('lsd:font-semibold');
  });

  it('applies data-slot attribute', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveAttribute('data-slot', 'alert-dialog-title');
  });

  it('merges custom className with component classes', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="custom-title-class">
              Title
            </AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveClass('custom-title-class');
  });

  it('passes through additional props', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle data-testid="test-title" id="title-1">
              Title
            </AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toHaveAttribute('data-testid', 'test-title');
    expect(title).toHaveAttribute('id', 'title-1');
  });
});

describe('AlertDialogDescription', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description</AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description</AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const description = screen.getByText('Description');
    expect(description).toHaveClass('lsd:text-lsd-text-secondary');
    expect(description).toHaveClass('lsd:text-sm');
  });

  it('applies data-slot attribute', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description</AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const description = screen.getByText('Description');
    expect(description).toHaveAttribute(
      'data-slot',
      'alert-dialog-description',
    );
  });

  it('merges custom className with component classes', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription className="custom-description-class">
              Description
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const description = screen.getByText('Description');
    expect(description).toHaveClass('custom-description-class');
  });
});

describe('AlertDialogAction', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });

  it('applies button variant classes', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const action = screen.getByRole('button', { name: 'Confirm' });
    expect(action).toHaveClass('lsd:cursor-pointer');
  });

  it('merges custom className with component classes', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogAction className="custom-action-class">
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const action = screen.getByRole('button', { name: 'Confirm' });
    expect(action).toHaveClass('custom-action-class');
  });

  it('passes through additional props', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogAction data-testid="test-action" id="action-1">
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const action = screen.getByRole('button', { name: 'Confirm' });
    expect(action).toHaveAttribute('data-testid', 'test-action');
    expect(action).toHaveAttribute('id', 'action-1');
  });

  it('handles click events', () => {
    const handleAction = vi.fn();
    render(
      <AlertDialog open onOpenChange={handleAction}>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const action = screen.getByRole('button', { name: 'Confirm' });
    fireEvent.click(action);
    expect(handleAction).toHaveBeenCalledWith(false);
  });
});

describe('AlertDialogCancel', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('applies outlined variant classes', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const cancel = screen.getByRole('button', { name: 'Cancel' });
    expect(cancel).toHaveClass('lsd:cursor-pointer');
  });

  it('merges custom className with component classes', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogCancel className="custom-cancel-class">
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const cancel = screen.getByRole('button', { name: 'Cancel' });
    expect(cancel).toHaveClass('custom-cancel-class');
  });

  it('passes through additional props', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid="test-cancel" id="cancel-1">
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const cancel = screen.getByRole('button', { name: 'Cancel' });
    expect(cancel).toHaveAttribute('data-testid', 'test-cancel');
    expect(cancel).toHaveAttribute('id', 'cancel-1');
  });

  it('handles click events', () => {
    const handleCancel = vi.fn();
    render(
      <AlertDialog open onOpenChange={handleCancel}>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const cancel = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancel);
    expect(handleCancel).toHaveBeenCalledWith(false);
  });
});
