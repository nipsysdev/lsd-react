import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Typography, typographyVariants } from './typography';

describe('Typography', () => {
  it('renders without crashing', () => {
    render(<Typography>Text</Typography>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(<Typography>Test Text</Typography>);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('uses default variant (body1) when not specified', () => {
    render(<Typography>Text</Typography>);
    const element = screen.getByText('Text');
    expect(element).toHaveClass('lsd:text-[1rem]');
    expect(element).toHaveClass('lsd:leading-[1.5rem]');
  });

  it('uses default color (primary) when not specified', () => {
    render(<Typography>Text</Typography>);
    const element = screen.getByText('Text');
    expect(element).toHaveClass('lsd:text-lsd-text-primary');
  });

  it('applies display1 variant classes correctly', () => {
    render(<Typography variant="display1">Display 1</Typography>);
    const element = screen.getByText('Display 1');
    expect(element).toHaveClass('lsd:text-[5.5rem]');
    expect(element).toHaveClass('lsd:font-normal');
    expect(element).toHaveClass('lsd:leading-[6rem]');
  });

  it('applies display2 variant classes correctly', () => {
    render(<Typography variant="display2">Display 2</Typography>);
    const element = screen.getByText('Display 2');
    expect(element).toHaveClass('lsd:text-[4rem]');
    expect(element).toHaveClass('lsd:leading-[4.5rem]');
  });

  it('applies display3 variant classes correctly', () => {
    render(<Typography variant="display3">Display 3</Typography>);
    const element = screen.getByText('Display 3');
    expect(element).toHaveClass('lsd:text-[3.5rem]');
    expect(element).toHaveClass('lsd:leading-[4rem]');
  });

  it('applies display4 variant classes correctly', () => {
    render(<Typography variant="display4">Display 4</Typography>);
    const element = screen.getByText('Display 4');
    expect(element).toHaveClass('lsd:text-[3rem]');
    expect(element).toHaveClass('lsd:leading-[3.5rem]');
  });

  it('applies h1 variant classes correctly', () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    const element = screen.getByText('Heading 1');
    expect(element).toHaveClass('lsd:text-[2.5rem]');
    expect(element).toHaveClass('lsd:leading-[3rem]');
    expect(element.tagName).toBe('H1');
  });

  it('applies h2 variant classes correctly', () => {
    render(<Typography variant="h2">Heading 2</Typography>);
    const element = screen.getByText('Heading 2');
    expect(element).toHaveClass('lsd:text-[2rem]');
    expect(element).toHaveClass('lsd:leading-[2.5rem]');
    expect(element.tagName).toBe('H2');
  });

  it('applies h3 variant classes correctly', () => {
    render(<Typography variant="h3">Heading 3</Typography>);
    const element = screen.getByText('Heading 3');
    expect(element).toHaveClass('lsd:text-[1.75rem]');
    expect(element).toHaveClass('lsd:leading-[2.25rem]');
    expect(element.tagName).toBe('H3');
  });

  it('applies h4 variant classes correctly', () => {
    render(<Typography variant="h4">Heading 4</Typography>);
    const element = screen.getByText('Heading 4');
    expect(element).toHaveClass('lsd:text-[1.5rem]');
    expect(element).toHaveClass('lsd:leading-[2rem]');
    expect(element.tagName).toBe('H4');
  });

  it('applies h5 variant classes correctly', () => {
    render(<Typography variant="h5">Heading 5</Typography>);
    const element = screen.getByText('Heading 5');
    expect(element).toHaveClass('lsd:text-[1.25rem]');
    expect(element).toHaveClass('lsd:leading-[1.75rem]');
    expect(element.tagName).toBe('H5');
  });

  it('applies h6 variant classes correctly', () => {
    render(<Typography variant="h6">Heading 6</Typography>);
    const element = screen.getByText('Heading 6');
    expect(element).toHaveClass('lsd:text-[1rem]');
    expect(element).toHaveClass('lsd:leading-[1.5rem]');
    expect(element.tagName).toBe('H6');
  });

  it('applies subtitle1 variant classes correctly', () => {
    render(<Typography variant="subtitle1">Subtitle 1</Typography>);
    const element = screen.getByText('Subtitle 1');
    expect(element).toHaveClass('lsd:text-[1.125rem]');
    expect(element).toHaveClass('lsd:leading-[1.5rem]');
  });

  it('applies subtitle2 variant classes correctly', () => {
    render(<Typography variant="subtitle2">Subtitle 2</Typography>);
    const element = screen.getByText('Subtitle 2');
    expect(element).toHaveClass('lsd:text-[1rem]');
    expect(element).toHaveClass('lsd:leading-[1.5rem]');
  });

  it('applies subtitle3 variant classes correctly', () => {
    render(<Typography variant="subtitle3">Subtitle 3</Typography>);
    const element = screen.getByText('Subtitle 3');
    expect(element).toHaveClass('lsd:text-[0.875rem]');
    expect(element).toHaveClass('lsd:leading-[1.25rem]');
  });

  it('applies subtitle4 variant classes correctly', () => {
    render(<Typography variant="subtitle4">Subtitle 4</Typography>);
    const element = screen.getByText('Subtitle 4');
    expect(element).toHaveClass('lsd:text-[0.75rem]');
    expect(element).toHaveClass('lsd:leading-[1rem]');
  });

  it('applies body1 variant classes correctly', () => {
    render(<Typography variant="body1">Body 1</Typography>);
    const element = screen.getByText('Body 1');
    expect(element).toHaveClass('lsd:text-[1rem]');
    expect(element).toHaveClass('lsd:leading-[1.5rem]');
  });

  it('applies body2 variant classes correctly', () => {
    render(<Typography variant="body2">Body 2</Typography>);
    const element = screen.getByText('Body 2');
    expect(element).toHaveClass('lsd:text-[0.875rem]');
    expect(element).toHaveClass('lsd:leading-[1.25rem]');
  });

  it('applies body3 variant classes correctly', () => {
    render(<Typography variant="body3">Body 3</Typography>);
    const element = screen.getByText('Body 3');
    expect(element).toHaveClass('lsd:text-[0.75rem]');
    expect(element).toHaveClass('lsd:leading-[1rem]');
  });

  it('applies label1 variant classes correctly', () => {
    render(<Typography variant="label1">Label 1</Typography>);
    const element = screen.getByText('Label 1');
    expect(element).toHaveClass('lsd:text-[0.875rem]');
    expect(element).toHaveClass('lsd:leading-[1.25rem]');
    expect(element.tagName).toBe('LABEL');
  });

  it('applies label2 variant classes correctly', () => {
    render(<Typography variant="label2">Label 2</Typography>);
    const element = screen.getByText('Label 2');
    expect(element).toHaveClass('lsd:text-[0.75rem]');
    expect(element).toHaveClass('lsd:leading-[1rem]');
    expect(element.tagName).toBe('LABEL');
  });

  it('applies primary color classes correctly', () => {
    render(<Typography color="primary">Primary</Typography>);
    const element = screen.getByText('Primary');
    expect(element).toHaveClass('lsd:text-lsd-text-primary');
  });

  it('applies secondary color classes correctly', () => {
    render(<Typography color="secondary">Secondary</Typography>);
    const element = screen.getByText('Secondary');
    expect(element).toHaveClass('lsd:text-lsd-text-secondary');
  });

  it('merges custom className with component classes', () => {
    render(<Typography className="custom-class">Custom</Typography>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });

  it('allows overriding the as prop', () => {
    render(<Typography as="p">Paragraph</Typography>);
    const element = screen.getByText('Paragraph');
    expect(element.tagName).toBe('P');
  });

  it('forwards ref to underlying element', () => {
    const ref = vi.fn();
    render(<Typography ref={ref}>Ref Test</Typography>);
    expect(ref).toHaveBeenCalled();
  });

  it('passes through additional props', () => {
    render(
      <Typography data-testid="test-typography" id="text-1">
        Text
      </Typography>,
    );
    const element = screen.getByText('Text');
    expect(element).toHaveAttribute('data-testid', 'test-typography');
    expect(element).toHaveAttribute('id', 'text-1');
  });

  it('display variants default to div element', () => {
    render(<Typography variant="display1">Display</Typography>);
    expect(screen.getByText('Display').tagName).toBe('DIV');
  });
});

describe('typographyVariants', () => {
  it('returns correct classes for display1 variant', () => {
    expect(typographyVariants({ variant: 'display1' })).toContain(
      'lsd:text-[5.5rem]',
    );
    expect(typographyVariants({ variant: 'display1' })).toContain(
      'lsd:leading-[6rem]',
    );
  });

  it('returns correct classes for h1 variant', () => {
    expect(typographyVariants({ variant: 'h1' })).toContain(
      'lsd:text-[2.5rem]',
    );
    expect(typographyVariants({ variant: 'h1' })).toContain(
      'lsd:leading-[3rem]',
    );
  });

  it('returns correct classes for body1 variant', () => {
    expect(typographyVariants({ variant: 'body1' })).toContain(
      'lsd:text-[1rem]',
    );
    expect(typographyVariants({ variant: 'body1' })).toContain(
      'lsd:leading-[1.5rem]',
    );
  });

  it('returns correct classes for primary color', () => {
    expect(typographyVariants({ color: 'primary' })).toContain(
      'lsd:text-lsd-text-primary',
    );
  });

  it('returns correct classes for secondary color', () => {
    expect(typographyVariants({ color: 'secondary' })).toContain(
      'lsd:text-lsd-text-secondary',
    );
  });

  it('uses default variant when not specified', () => {
    expect(typographyVariants({})).toContain('lsd:text-[1rem]');
  });

  it('uses default color when not specified', () => {
    expect(typographyVariants({})).toContain('lsd:text-lsd-text-primary');
  });

  it('combines variant and color correctly', () => {
    const classes = typographyVariants({ variant: 'h2', color: 'secondary' });
    expect(classes).toContain('lsd:text-[2rem]');
    expect(classes).toContain('lsd:text-lsd-text-secondary');
  });
});
