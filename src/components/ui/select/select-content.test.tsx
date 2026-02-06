import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./index";

describe("SelectContent", () => {
  it("renders without crashing when open", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(
      document.querySelector('[data-slot="select-content"]'),
    ).toBeInTheDocument();
  });

  it("applies data-slot attribute", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const content = document.querySelector('[data-slot="select-content"]');
    expect(content).toHaveAttribute("data-slot", "select-content");
  });

  it("applies base classes correctly", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const content = document.querySelector('[data-slot="select-content"]');
    expect(content).toHaveClass("lsd:bg-lsd-surface-primary");
    expect(content).toHaveClass("lsd:text-lsd-text");
    expect(content).toHaveClass("lsd:border");
    expect(content).toHaveClass("lsd:border-lsd-border");
  });

  it("applies animation classes", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const content = document.querySelector('[data-slot="select-content"]');
    expect(content).toHaveClass("lsd:data-[state=open]:animate-in");
    expect(content).toHaveClass("lsd:data-[state=closed]:animate-out");
  });

  it("merges custom className with component classes", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent className="custom-content-class">
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const content = document.querySelector('[data-slot="select-content"]');
    expect(content).toHaveClass("custom-content-class");
  });

  it("passes through additional props", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent data-testid="test-content" id="content-1">
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const content = document.querySelector('[data-slot="select-content"]');
    expect(content).toHaveAttribute("data-testid", "test-content");
    expect(content).toHaveAttribute("id", "content-1");
  });

  it("renders children correctly", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <p>Custom content</p>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByText("Custom content")).toBeInTheDocument();
  });
});
