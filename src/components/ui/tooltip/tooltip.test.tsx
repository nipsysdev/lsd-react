import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./index";

describe("Tooltip", () => {
  it("renders without crashing", () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("includes TooltipProvider", () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("passes through additional props", () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("renders with TooltipProvider wrapper", () => {
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

  it("renders all sub-components together", () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    const trigger = document.querySelector('[data-slot="tooltip-trigger"]');
    expect(trigger).toBeInTheDocument();
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("renders content when open", () => {
    render(
      <Tooltip open>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    const content = document.querySelector('[data-slot="tooltip-content"]');
    expect(content).toBeInTheDocument();
  });
});
