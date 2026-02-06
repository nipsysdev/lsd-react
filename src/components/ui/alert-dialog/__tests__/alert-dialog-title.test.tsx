import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../index';

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
