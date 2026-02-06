import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
} from "./index";

describe("AlertDialogAction", () => {
  it("renders without crashing", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
  });

  it("applies button variant classes", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const action = screen.getByRole("button", { name: "Confirm" });
    expect(action).toHaveClass("lsd:cursor-pointer");
  });

  it("merges custom className with component classes", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogAction className="custom-action-class">
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const action = screen.getByRole("button", { name: "Confirm" });
    expect(action).toHaveClass("custom-action-class");
  });

  it("passes through additional props", () => {
    render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogAction data-testid="test-action" id="action-1">
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const action = screen.getByRole("button", { name: "Confirm" });
    expect(action).toHaveAttribute("data-testid", "test-action");
    expect(action).toHaveAttribute("id", "action-1");
  });

  it("handles click events", () => {
    const handleAction = vi.fn();
    render(
      <AlertDialog open onOpenChange={handleAction}>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );
    const action = screen.getByRole("button", { name: "Confirm" });
    fireEvent.click(action);
    expect(handleAction).toHaveBeenCalledWith(false);
  });
});
