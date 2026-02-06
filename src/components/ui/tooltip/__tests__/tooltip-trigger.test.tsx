import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tooltip, TooltipContent, TooltipTrigger } from '../index';

describe('TooltipTrigger', () => {
  it('renders without crashing', () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    const trigger = document.querySelector('[data-slot="tooltip-trigger"]');
    expect(trigger).toHaveAttribute('data-slot', 'tooltip-trigger');
  });

  it('passes through additional props', () => {
    render(
      <Tooltip>
        <TooltipTrigger data-testid="test-trigger" id="trigger-1">
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    const trigger = document.querySelector('[data-slot="tooltip-trigger"]');
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });

  it('renders children correctly', () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <span>Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });
});
