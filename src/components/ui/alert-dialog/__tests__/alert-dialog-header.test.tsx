import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AlertDialog, AlertDialogContent, AlertDialogHeader } from '../index';

describe('AlertDialogHeader', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div>Title</div>
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
            <div>Title</div>
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
            <div>Title</div>
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
            <div>Title</div>
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
            <div>Title</div>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const header = document.querySelector('[data-slot="alert-dialog-header"]');
    expect(header).toHaveAttribute('data-testid', 'test-header');
    expect(header).toHaveAttribute('id', 'header-1');
  });
});
