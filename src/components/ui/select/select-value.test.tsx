import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./index";

describe("SelectValue", () => {
  it("renders without crashing", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("applies data-slot attribute", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const value = document.querySelector('[data-slot="select-value"]');
    expect(value).toHaveAttribute("data-slot", "select-value");
  });

  it("renders selected value", () => {
    render(
      <Select value="option-1">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });
});
