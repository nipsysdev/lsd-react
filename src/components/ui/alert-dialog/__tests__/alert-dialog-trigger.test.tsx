import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '../index';

describe('AlertDialogTrigger', () => {
  it('renders without crashing', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <div>Content</div>
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
          <div>Content</div>
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
          <div>Content</div>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const trigger = screen.getByRole('button', { name: 'Open' });
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });
});
