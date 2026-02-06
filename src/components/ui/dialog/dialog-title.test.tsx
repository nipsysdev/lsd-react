import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./index";

describe("DialogTitle", () => {
  it("renders without crashing", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByRole("heading", { name: "Title" })).toBeInTheDocument();
  });

  it("renders as a heading", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByRole("heading", { name: "Title" })).toBeInTheDocument();
  });

  it("applies base classes correctly", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const title = screen.getByRole("heading", { name: "Title" });
    expect(title).toHaveClass("lsd:text-lg");
    expect(title).toHaveClass("lsd:leading-none");
    expect(title).toHaveClass("lsd:font-semibold");
  });

  it("applies data-slot attribute", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const title = screen.getByRole("heading", { name: "Title" });
    expect(title).toHaveAttribute("data-slot", "dialog-title");
  });

  it("merges custom className with component classes", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="custom-title-class">Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const title = screen.getByRole("heading", { name: "Title" });
    expect(title).toHaveClass("custom-title-class");
  });

  it("passes through additional props", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle data-testid="test-title" id="title-1">
              Title
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const title = screen.getByRole("heading", { name: "Title" });
    expect(title).toHaveAttribute("data-testid", "test-title");
    expect(title).toHaveAttribute("id", "title-1");
  });
});
