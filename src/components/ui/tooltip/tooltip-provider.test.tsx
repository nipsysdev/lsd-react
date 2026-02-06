import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./index";

describe("TooltipProvider", () => {
  it("renders without crashing", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <span>Hover me</span>
          </TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("wraps Tooltip components correctly", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <span>Hover me</span>
          </TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("passes through additional props", () => {
    render(
      <TooltipProvider data-testid="test-provider">
        <Tooltip>
          <TooltipTrigger>
            <span>Hover me</span>
          </TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    const provider = document.querySelector('[data-testid="test-provider"]');
    expect(provider).toBeInTheDocument();
  });

  it("renders multiple Tooltip components", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <span>Hover me 1</span>
          </TooltipTrigger>
          <TooltipContent>Tooltip content 1</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <span>Hover me 2</span>
          </TooltipTrigger>
          <TooltipContent>Tooltip content 2</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    expect(screen.getByText("Hover me 1")).toBeInTheDocument();
    expect(screen.getByText("Hover me 2")).toBeInTheDocument();
  });
});
