import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./index";

describe("SheetContent", () => {
  it("renders without crashing", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("applies base classes correctly", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass("lsd:bg-background");
    expect(content).toHaveClass("lsd:fixed");
    expect(content).toHaveClass("lsd:z-50");
    expect(content).toHaveClass("lsd:flex");
    expect(content).toHaveClass("lsd:flex-col");
  });

  it("applies data-slot attribute", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveAttribute("data-slot", "sheet-content");
  });

  it("merges custom className with component classes", () => {
    render(
      <Sheet open>
        <SheetContent className="custom-content-class">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass("custom-content-class");
  });

  it("passes through additional props", () => {
    render(
      <Sheet open>
        <SheetContent data-testid="test-content" id="content-1">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveAttribute("data-testid", "test-content");
    expect(content).toHaveAttribute("id", "content-1");
  });

  it("renders children correctly", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <p>Custom content</p>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByText("Custom content")).toBeInTheDocument();
  });

  it("applies right side classes by default", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass("lsd:inset-y-0");
    expect(content).toHaveClass("lsd:right-0");
    expect(content).toHaveClass("lsd:h-full");
    expect(content).toHaveClass("lsd:w-3/4");
    expect(content).toHaveClass("lsd:border-l");
  });

  it('applies left side classes when side="left"', () => {
    render(
      <Sheet open>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass("lsd:inset-y-0");
    expect(content).toHaveClass("lsd:left-0");
    expect(content).toHaveClass("lsd:h-full");
    expect(content).toHaveClass("lsd:w-3/4");
    expect(content).toHaveClass("lsd:border-r");
  });

  it('applies top side classes when side="top"', () => {
    render(
      <Sheet open>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass("lsd:inset-x-0");
    expect(content).toHaveClass("lsd:top-0");
    expect(content).toHaveClass("lsd:h-auto");
    expect(content).toHaveClass("lsd:border-b");
  });

  it('applies bottom side classes when side="bottom"', () => {
    render(
      <Sheet open>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass("lsd:inset-x-0");
    expect(content).toHaveClass("lsd:bottom-0");
    expect(content).toHaveClass("lsd:h-auto");
    expect(content).toHaveClass("lsd:border-t");
  });

  it("renders close button", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const closeButton = document.querySelector(
      '[data-slot="sheet-content"] button',
    );
    expect(closeButton).toBeInTheDocument();
  });
});
