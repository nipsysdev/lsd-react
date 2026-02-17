import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../index';

describe('Menubar', () => {
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
    expect(document.querySelector('[data-slot="menubar"]')).toBeInTheDocument();
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
    const menubar = document.querySelector('[data-slot="menubar"]');
    expect(menubar).toHaveAttribute('data-slot', 'menubar');
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
    const menubar = document.querySelector('[data-slot="menubar"]');
    expect(menubar).toHaveClass('lsd:flex');
    expect(menubar).toHaveClass('lsd:h-9');
    expect(menubar).toHaveClass('lsd:items-center');
    expect(menubar).toHaveClass('lsd:gap-1');
    expect(menubar).toHaveClass('lsd:border');
    expect(menubar).toHaveClass('lsd:bg-lsd-surface');
  });

  it('merges custom className with component classes', () => {
    render(
      <Menubar className="custom-menubar-class">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    const menubar = document.querySelector('[data-slot="menubar"]');
    expect(menubar).toHaveClass('custom-menubar-class');
    expect(menubar).toHaveClass('lsd:flex');
  });

  it('passes through additional props', () => {
    render(
      <Menubar data-testid="test-menubar" id="menubar-1">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    const menubar = document.querySelector('[data-slot="menubar"]');
    expect(menubar).toHaveAttribute('data-testid', 'test-menubar');
    expect(menubar).toHaveAttribute('id', 'menubar-1');
  });

  it('renders with multiple menus', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    expect(document.querySelector('[data-slot="menubar"]')).toBeInTheDocument();
    // Menubar triggers have role="menuitem" not "button"
    expect(screen.getByRole('menuitem', { name: 'File' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument();
  });
});
