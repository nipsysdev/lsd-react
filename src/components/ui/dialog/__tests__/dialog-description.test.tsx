import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../index';

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
    expect(description).toHaveClass('lsd:text-lsd-text-primary');
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
