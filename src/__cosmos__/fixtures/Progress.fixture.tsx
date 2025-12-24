import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function ProgressFixture() {
  const [progress, setProgress] = useState(30);

  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Progress Component</h2>
        <p className="lsd:text-muted-foreground">
          A progress component that displays the completion status of a task.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Basic Progress</h2>
        <CodeExample
          title="Progress Basic"
          code={`<div className="lsd:space-y-4">
  <Progress value={30} />
  <Progress value={50} />
  <Progress value={75} />
  <Progress value={100} />
</div>`}
        >
          <div className="lsd:space-y-4">
            <Progress value={30} />
            <Progress value={50} />
            <Progress value={75} />
            <Progress value={100} />
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Interactive Demo</h2>
        <CodeExample
          title="Progress Interactive Demo"
          code={`function InteractiveProgressDemo() {
  const [progress, setProgress] = useState(30);
  
  return (
    <div className="lsd:space-y-4">
      <div className="lsd:flex lsd:items-center lsd:gap-4">
        <Button
          variant="outlined"
          size="sm"
          onClick={() => setProgress(Math.max(0, progress - 10))}
        >
          -10%
        </Button>
        <span>{progress}%</span>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => setProgress(Math.min(100, progress + 10))}
        >
          +10%
        </Button>
      </div>
      <Progress value={progress} />
    </div>
  );
}`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:flex lsd:items-center lsd:gap-4">
              <Button
                variant="outlined"
                size="sm"
                onClick={() => setProgress(Math.max(0, progress - 10))}
              >
                -10%
              </Button>
              <span>{progress}%</span>
              <Button
                variant="outlined"
                size="sm"
                onClick={() => setProgress(Math.min(100, progress + 10))}
              >
                +10%
              </Button>
            </div>
            <Progress value={progress} />
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">
          Indeterminate Progress
        </h2>
        <CodeExample
          title="Progress Indeterminate"
          code={`<div className="lsd:space-y-4">
  <Progress indeterminate />
  <Progress indeterminate speed="slow" />
  <Progress indeterminate speed="fast" />
</div>`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:space-y-2">
              <p>Normal Speed (default):</p>
              <Progress indeterminate />
            </div>
            <div className="lsd:space-y-2">
              <p>Slow Speed:</p>
              <Progress indeterminate speed="slow" />
            </div>
            <div className="lsd:space-y-2">
              <p>Fast Speed:</p>
              <Progress indeterminate speed="fast" />
            </div>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
