import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
} from '../index';

describe('AlertDialogDescription', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div>Title</div>
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
            <div>Title</div>
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
            <div>Title</div>
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
            <div>Title</div>
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
