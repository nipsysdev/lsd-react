import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Popover, PopoverContent, PopoverTrigger } from "./index";

describe("PopoverContent", () => {
  it("renders without crashing when open", () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    expect(
      document.querySelector('[data-slot="popover-content"]'),
    ).toBeInTheDocument();
  });

  it("applies base classes correctly", () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveClass("lsd:bg-lsd-surface-primary");
    expect(content).toHaveClass("lsd:text-lsd-text");
    expect(content).toHaveClass("lsd:z-50");
    expect(content).toHaveClass("lsd:w-72");
    expect(content).toHaveClass("lsd:border");
    expect(content).toHaveClass("lsd:border-lsd-border");
    expect(content).toHaveClass("lsd:p-4");
    expect(content).toHaveClass("lsd:shadow-md");
  });

  it("applies animation classes", () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveClass("lsd:data-[state=open]:animate-in");
    expect(content).toHaveClass("lsd:data-[state=closed]:animate-out");
  });

  it("applies data-slot attribute", () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveAttribute("data-slot", "popover-content");
  });

  it("merges custom className with component classes", () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="custom-content-class">
          Content
        </PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveClass("custom-content-class");
  });

  it("passes through additional props", () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent data-testid="test-content" id="content-1">
          Content
        </PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveAttribute("data-testid", "test-content");
    expect(content).toHaveAttribute("id", "content-1");
  });

  it("renders children correctly", () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <p>Custom content</p>
        </PopoverContent>
      </Popover>,
    );
    expect(screen.getByText("Custom content")).toBeInTheDocument();
  });

  it("applies bottom animation classes", () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toHaveClass("lsd:data-[side=bottom]:slide-in-from-top-2");
  });
});
