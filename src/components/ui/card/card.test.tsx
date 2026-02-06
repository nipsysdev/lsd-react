import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./index";

// Helper function to query by data-slot
const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe("Card", () => {
  it("renders without crashing", () => {
    const { container } = render(<Card />);
    expect(queryByDataSlot(container, "card")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(<Card className="custom-class" />);
    const card = queryByDataSlot(container, "card");
    expect(card).toHaveClass("custom-class");
  });

  it("applies default classes", () => {
    const { container } = render(<Card />);
    const card = queryByDataSlot(container, "card");
    expect(card).toHaveClass("lsd:bg-lsd-surface-primary");
    expect(card).toHaveClass("lsd:text-lsd-text-primary");
    expect(card).toHaveClass("lsd:flex");
    expect(card).toHaveClass("lsd:flex-col");
    expect(card).toHaveClass("lsd:border-lsd-border-primary");
    expect(card).toHaveClass("lsd:border");
    expect(card).toHaveClass("lsd:shadow-sm");
  });

  it("passes through additional props", () => {
    render(<Card data-testid="test-card" data-custom="value" />);
    expect(screen.getByTestId("test-card")).toHaveAttribute(
      "data-custom",
      "value",
    );
  });

  it("renders children", () => {
    render(
      <Card>
        <span>Card content</span>
      </Card>,
    );
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("forwards ref", () => {
    const ref = { current: null };
    render(<Card ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("renders a complete card with all subcomponents", () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <button type="button">Action</button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <span>Card Content</span>
        </CardContent>
        <CardFooter>
          <button type="button">Footer Action</button>
        </CardFooter>
      </Card>,
    );

    expect(queryByDataSlot(container, "card")).toBeInTheDocument();
    expect(queryByDataSlot(container, "card-header")).toBeInTheDocument();
    expect(queryByDataSlot(container, "card-title")).toBeInTheDocument();
    expect(queryByDataSlot(container, "card-description")).toBeInTheDocument();
    expect(queryByDataSlot(container, "card-action")).toBeInTheDocument();
    expect(queryByDataSlot(container, "card-content")).toBeInTheDocument();
    expect(queryByDataSlot(container, "card-footer")).toBeInTheDocument();
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("renders a minimal card with only content", () => {
    const { container } = render(
      <Card>
        <CardContent>
          <span>Simple Card</span>
        </CardContent>
      </Card>,
    );

    expect(queryByDataSlot(container, "card")).toBeInTheDocument();
    expect(queryByDataSlot(container, "card-content")).toBeInTheDocument();
    expect(screen.getByText("Simple Card")).toBeInTheDocument();
  });
});
