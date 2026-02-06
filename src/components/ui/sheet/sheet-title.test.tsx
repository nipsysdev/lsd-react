import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./index";

describe("SheetTitle", () => {
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
    expect(screen.getByRole("heading", { name: "Title" })).toBeInTheDocument();
  });

  it("renders as a heading", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByRole("heading", { name: "Title" })).toBeInTheDocument();
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
    const title = screen.getByRole("heading", { name: "Title" });
    expect(title).toHaveClass("lsd:text-foreground");
    expect(title).toHaveClass("lsd:font-semibold");
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
    const title = screen.getByRole("heading", { name: "Title" });
    expect(title).toHaveAttribute("data-slot", "sheet-title");
  });

  it("merges custom className with component classes", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="custom-title-class">Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const title = screen.getByRole("heading", { name: "Title" });
    expect(title).toHaveClass("custom-title-class");
  });

  it("passes through additional props", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle data-testid="test-title" id="title-1">
              Title
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const title = screen.getByRole("heading", { name: "Title" });
    expect(title).toHaveAttribute("data-testid", "test-title");
    expect(title).toHaveAttribute("id", "title-1");
  });
});
