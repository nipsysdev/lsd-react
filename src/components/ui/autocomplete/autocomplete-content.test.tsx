import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { AutocompleteContent } from "./index";
import type { AutocompleteOption } from "./types";

describe("AutocompleteContent", () => {
  const mockOptions: AutocompleteOption[] = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  const defaultProps = {
    searchText: "",
    onSearchTextChange: vi.fn(),
    placeholder: "Search...",
    loadingText: "Loading...",
    emptyText: "No results",
    isLoading: false,
    filteredOptions: mockOptions,
    onSelect: vi.fn(),
  };

  it("renders without crashing", () => {
    render(<AutocompleteContent {...defaultProps} />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("renders options when provided", () => {
    render(<AutocompleteContent {...defaultProps} />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("renders loading text when isLoading is true", () => {
    render(<AutocompleteContent {...defaultProps} isLoading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders empty text when no options match", () => {
    render(<AutocompleteContent {...defaultProps} filteredOptions={[]} />);
    expect(screen.getByText("No results")).toBeInTheDocument();
  });

  it("calls onSelect when an option is clicked", () => {
    const onSelect = vi.fn();
    render(<AutocompleteContent {...defaultProps} onSelect={onSelect} />);
    const option = screen.getByText("Option 1");
    option.click();
    expect(onSelect).toHaveBeenCalledWith("1");
  });

  it("highlights matching text in options", () => {
    render(
      <AutocompleteContent
        {...defaultProps}
        searchText="Option"
        filteredOptions={mockOptions}
      />,
    );
    const options = screen.getAllByText("Option");
    expect(options.length).toBeGreaterThan(0);
  });

  it("applies custom className to PopoverContent", () => {
    const { container } = render(<AutocompleteContent {...defaultProps} />);
    const popoverContent = container.querySelector(
      '[data-slot="popover-content"]',
    );
    expect(popoverContent).toHaveClass("lsd:w-full");
    expect(popoverContent).toHaveClass("lsd:p-0");
  });
});
