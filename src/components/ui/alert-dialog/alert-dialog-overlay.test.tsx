import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AlertDialog, AlertDialogContent, AlertDialogOverlay } from "./index";

describe("AlertDialogOverlay", () => {
  it("renders without crashing", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <div>Content</div>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(
      document.querySelector('[data-slot="alert-dialog-overlay"]'),
    ).toBeInTheDocument();
  });

  it("applies base classes correctly", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <div>Content</div>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const overlay = document.querySelector(
      '[data-slot="alert-dialog-overlay"]',
    );
    expect(overlay).toHaveClass("lsd:fixed");
    expect(overlay).toHaveClass("lsd:inset-0");
    expect(overlay).toHaveClass("lsd:z-50");
    expect(overlay).toHaveClass("lsd:bg-black/50");
  });

  it("applies animation classes", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <div>Content</div>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const overlay = document.querySelector(
      '[data-slot="alert-dialog-overlay"]',
    );
    expect(overlay).toHaveClass("lsd:data-[state=open]:animate-in");
    expect(overlay).toHaveClass("lsd:data-[state=closed]:animate-out");
  });

  it("applies data-slot attribute", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <div>Content</div>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const overlay = document.querySelector(
      '[data-slot="alert-dialog-overlay"]',
    );
    expect(overlay).toHaveAttribute("data-slot", "alert-dialog-overlay");
  });

  it("merges custom className with component classes", () => {
    render(
      <AlertDialog open>
        <AlertDialogOverlay className="custom-overlay-class" />
        <AlertDialogContent>
          <div>Content</div>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const overlay = document.querySelector(
      '[data-slot="alert-dialog-overlay"]',
    );
    expect(overlay).toHaveClass("custom-overlay-class");
  });
});
