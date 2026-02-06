import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../index';

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

  it('renders with all subcomponents', () => {
    render(
      <Dialog open>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
          <p>Dialog Content</p>
          <DialogFooter>
            <button type="button">Cancel</button>
            <button type="button">Confirm</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    );
    // Verify trigger is present (may be hidden when dialog is open)
    expect(
      document.querySelector('[data-slot="dialog-trigger"]'),
    ).toBeInTheDocument();
    // Verify dialog is present
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    // Verify title is present
    expect(
      screen.getByRole('heading', { name: 'Dialog Title' }),
    ).toBeInTheDocument();
    // Verify description is present
    expect(screen.getByText('Dialog Description')).toBeInTheDocument();
    // Verify content is present
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
    // Verify footer buttons are present
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });
});
