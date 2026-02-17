import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../index';

describe('MenubarTrigger', () => {
  it('renders without crashing', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    // Menubar triggers have role="menuitem"
    expect(screen.getByRole('menuitem', { name: 'File' })).toBeInTheDocument();
  });

  it('renders as a menuitem', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    expect(screen.getByRole('menuitem', { name: 'File' })).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    const trigger = screen.getByRole('menuitem', { name: 'File' });
    expect(trigger).toHaveClass('lsd:flex');
    expect(trigger).toHaveClass('lsd:items-center');
    expect(trigger).toHaveClass('lsd:px-2');
    expect(trigger).toHaveClass('lsd:py-1');
    expect(trigger).toHaveClass('lsd:text-sm');
    expect(trigger).toHaveClass('lsd:font-medium');
    expect(trigger).toHaveClass('lsd:cursor-pointer');
  });

  it('applies data-slot attribute', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    const trigger = screen.getByRole('menuitem', { name: 'File' });
    expect(trigger).toHaveAttribute('data-slot', 'menubar-trigger');
  });

  it('merges custom className with component classes', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="custom-trigger-class">File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    const trigger = screen.getByRole('menuitem', { name: 'File' });
    expect(trigger).toHaveClass('custom-trigger-class');
    expect(trigger).toHaveClass('lsd:flex');
  });

  it('passes through additional props', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger data-testid="test-trigger" id="trigger-1">
            File
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    const trigger = screen.getByRole('menuitem', { name: 'File' });
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });

  it('forwards ref to underlying button element', () => {
    const ref = vi.fn();
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger ref={ref}>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement);
  });
});
