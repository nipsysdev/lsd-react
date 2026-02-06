import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AlertDialog, AlertDialogContent } from '../index';

describe('AlertDialogContent', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <div>Content</div>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <div>Content</div>
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
          <div>Content</div>
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
          <div>Content</div>
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
          <div>Content</div>
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
          <p>Custom content</p>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });
});
