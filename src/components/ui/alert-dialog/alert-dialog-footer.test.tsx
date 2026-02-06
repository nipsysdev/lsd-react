import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AlertDialog, AlertDialogContent, AlertDialogFooter } from "./index";

describe("AlertDialogFooter", () => {
  it("renders without crashing", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <button type="button">Cancel</button>
            <button type="button">Confirm</button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(
      document.querySelector('[data-slot="alert-dialog-footer"]'),
    ).toBeInTheDocument();
  });

  it("applies base classes correctly", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <button type="button">Cancel</button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const footer = document.querySelector('[data-slot="alert-dialog-footer"]');
    expect(footer).toHaveClass("lsd:flex");
    expect(footer).toHaveClass("lsd:flex-col-reverse");
    expect(footer).toHaveClass("lsd:gap-2");
  });

  it("applies data-slot attribute", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <button type="button">Cancel</button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const footer = document.querySelector('[data-slot="alert-dialog-footer"]');
    expect(footer).toHaveAttribute("data-slot", "alert-dialog-footer");
  });

  it("merges custom className with component classes", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter className="custom-footer-class">
            <button type="button">Cancel</button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const footer = document.querySelector('[data-slot="alert-dialog-footer"]');
    expect(footer).toHaveClass("custom-footer-class");
  });
});
