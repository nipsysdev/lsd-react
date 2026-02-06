import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../index';

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

  it('renders with all subcomponents', () => {
    render(
      <AlertDialog open>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Action</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    // Verify trigger is present (may be hidden when dialog is open)
    expect(
      document.querySelector('[data-slot="alert-dialog-trigger"]'),
    ).toBeInTheDocument();
    // Verify dialog is present
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    // Verify title is present
    expect(
      screen.getByRole('heading', { name: 'Confirm Action' }),
    ).toBeInTheDocument();
    // Verify description is present
    expect(
      screen.getByText('Are you sure you want to proceed?'),
    ).toBeInTheDocument();
    // Verify action buttons are present
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });
});
