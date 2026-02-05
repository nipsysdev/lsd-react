import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock ResizeObserver for components that use it (must be a class constructor)
class MockResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
global.ResizeObserver = MockResizeObserver;

// Mock matchMedia for components that use it
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollTo for components that use it
window.scrollTo = vi.fn();

// Mock scrollIntoView for components that use it (cmdk)
Element.prototype.scrollIntoView = vi.fn();
