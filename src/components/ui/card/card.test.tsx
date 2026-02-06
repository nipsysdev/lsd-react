import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './index';

// Helper function to query by data-slot
const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe('Card', () => {
  it('renders without crashing', () => {
    const { container } = render(<Card />);
    expect(queryByDataSlot(container, 'card')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<Card className="custom-class" />);
    const card = queryByDataSlot(container, 'card');
    expect(card).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<Card />);
    const card = queryByDataSlot(container, 'card');
    expect(card).toHaveClass('lsd:bg-lsd-surface-primary');
    expect(card).toHaveClass('lsd:text-lsd-text-primary');
    expect(card).toHaveClass('lsd:flex');
    expect(card).toHaveClass('lsd:flex-col');
    expect(card).toHaveClass('lsd:border-lsd-border-primary');
    expect(card).toHaveClass('lsd:border');
    expect(card).toHaveClass('lsd:shadow-sm');
  });

  it('passes through additional props', () => {
    render(<Card data-testid="test-card" data-custom="value" />);
    expect(screen.getByTestId('test-card')).toHaveAttribute(
      'data-custom',
      'value',
    );
  });

  it('renders children', () => {
    render(
      <Card>
        <span>Card content</span>
      </Card>,
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Card ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('CardHeader', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardHeader />);
    expect(queryByDataSlot(container, 'card-header')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardHeader className="custom-class" />);
    const header = queryByDataSlot(container, 'card-header');
    expect(header).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<CardHeader />);
    const header = queryByDataSlot(container, 'card-header');
    expect(header).toHaveClass('@container/card-header');
    expect(header).toHaveClass('lsd:grid');
    expect(header).toHaveClass('lsd:auto-rows-min');
    expect(header).toHaveClass('lsd:grid-rows-[auto_auto]');
    expect(header).toHaveClass('lsd:items-start');
    expect(header).toHaveClass('lsd:gap-2');
    expect(header).toHaveClass('lsd:px-6');
    expect(header).toHaveClass('lsd:py-6');
    expect(header).toHaveClass('lsd:border-b');
    expect(header).toHaveClass('lsd:border-lsd-border-primary');
    expect(header).toHaveClass('lsd:pb-6');
  });

  it('renders children', () => {
    render(
      <CardHeader>
        <span>Header content</span>
      </CardHeader>,
    );
    expect(screen.getByText('Header content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<CardHeader ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('CardTitle', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardTitle />);
    expect(queryByDataSlot(container, 'card-title')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardTitle className="custom-class" />);
    const title = queryByDataSlot(container, 'card-title');
    expect(title).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<CardTitle />);
    const title = queryByDataSlot(container, 'card-title');
    expect(title).toHaveClass('lsd:leading-none');
    expect(title).toHaveClass('lsd:font-semibold');
  });

  it('renders children', () => {
    render(
      <CardTitle>
        <span>Card Title</span>
      </CardTitle>,
    );
    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<CardTitle ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('CardDescription', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardDescription />);
    expect(queryByDataSlot(container, 'card-description')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardDescription className="custom-class" />);
    const description = queryByDataSlot(container, 'card-description');
    expect(description).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<CardDescription />);
    const description = queryByDataSlot(container, 'card-description');
    expect(description).toHaveClass('lsd:text-lsd-text-secondary');
    expect(description).toHaveClass('lsd:text-sm');
  });

  it('renders children', () => {
    render(
      <CardDescription>
        <span>Card Description</span>
      </CardDescription>,
    );
    expect(screen.getByText('Card Description')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<CardDescription ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('CardAction', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardAction />);
    expect(queryByDataSlot(container, 'card-action')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardAction className="custom-class" />);
    const action = queryByDataSlot(container, 'card-action');
    expect(action).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<CardAction />);
    const action = queryByDataSlot(container, 'card-action');
    expect(action).toHaveClass('lsd:col-start-2');
    expect(action).toHaveClass('lsd:row-span-2');
    expect(action).toHaveClass('lsd:row-start-1');
    expect(action).toHaveClass('lsd:self-start');
    expect(action).toHaveClass('lsd:justify-self-end');
  });

  it('renders children', () => {
    render(
      <CardAction>
        <button type="button">Action</button>
      </CardAction>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<CardAction ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('CardContent', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardContent />);
    expect(queryByDataSlot(container, 'card-content')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardContent className="custom-class" />);
    const content = queryByDataSlot(container, 'card-content');
    expect(content).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<CardContent />);
    const content = queryByDataSlot(container, 'card-content');
    expect(content).toHaveClass('lsd:px-6');
    expect(content).toHaveClass('lsd:py-6');
  });

  it('renders children', () => {
    render(
      <CardContent>
        <span>Content</span>
      </CardContent>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<CardContent ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('CardFooter', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardFooter />);
    expect(queryByDataSlot(container, 'card-footer')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardFooter className="custom-class" />);
    const footer = queryByDataSlot(container, 'card-footer');
    expect(footer).toHaveClass('custom-class');
  });

  it('applies default classes', () => {
    const { container } = render(<CardFooter />);
    const footer = queryByDataSlot(container, 'card-footer');
    expect(footer).toHaveClass('lsd:flex');
    expect(footer).toHaveClass('lsd:items-center');
    expect(footer).toHaveClass('lsd:px-6');
    expect(footer).toHaveClass('lsd:py-6');
    expect(footer).toHaveClass('lsd:border-t');
    expect(footer).toHaveClass('lsd:border-lsd-border-primary');
    expect(footer).toHaveClass('lsd:pt-6');
  });

  it('renders children', () => {
    render(
      <CardFooter>
        <button type="button">Footer Action</button>
      </CardFooter>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<CardFooter ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('Card composition', () => {
  it('renders a complete card with all subcomponents', () => {
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

    expect(queryByDataSlot(container, 'card')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'card-header')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'card-title')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'card-description')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'card-action')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'card-content')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'card-footer')).toBeInTheDocument();
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('renders a minimal card with only content', () => {
    const { container } = render(
      <Card>
        <CardContent>
          <span>Simple Card</span>
        </CardContent>
      </Card>,
    );

    expect(queryByDataSlot(container, 'card')).toBeInTheDocument();
    expect(queryByDataSlot(container, 'card-content')).toBeInTheDocument();
    expect(screen.getByText('Simple Card')).toBeInTheDocument();
  });
});
