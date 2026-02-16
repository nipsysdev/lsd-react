import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../index';

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
    expect(content).toHaveClass('lsd:bg-lsd-surface');
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
