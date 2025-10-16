import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function ProgressFixture() {
  const [progress, setProgress] = useState(30);

  return (
    <div className="p-8 w-full space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Progress Component</h2>
        <p className="text-muted-foreground">
          A progress component that displays the completion status of a task.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Progress</h2>
        <CodeExample
          title="Progress Basic"
          code={`<div className="space-y-4">
  <Progress value={30} />
  <Progress value={50} />
  <Progress value={75} />
  <Progress value={100} />
</div>`}
        >
          <div className="space-y-4">
            <Progress value={30} />
            <Progress value={50} />
            <Progress value={75} />
            <Progress value={100} />
          </div>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <CodeExample
          title="Progress Interactive Demo"
          code={`function InteractiveProgressDemo() {
  const [progress, setProgress] = useState(30);
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setProgress(Math.max(0, progress - 10))}
          className="px-4 py-2 bg-lsd-surface-secondary border border-lsd-border-primary"
        >
          -10%
        </button>
        <span>{progress}%</span>
        <button
          type="button"
          onClick={() => setProgress(Math.min(100, progress + 10))}
          className="px-4 py-2 bg-lsd-surface-secondary border border-lsd-border-primary"
        >
          +10%
        </button>
      </div>
      <Progress value={progress} />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setProgress(Math.max(0, progress - 10))}
                className="px-4 py-2 bg-lsd-surface-secondary border border-lsd-border-primary"
              >
                -10%
              </button>
              <span>{progress}%</span>
              <button
                type="button"
                onClick={() => setProgress(Math.min(100, progress + 10))}
                className="px-4 py-2 bg-lsd-surface-secondary border border-lsd-border-primary"
              >
                +10%
              </button>
            </div>
            <Progress value={progress} />
          </div>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Indeterminate Progress</h2>
        <CodeExample
          title="Progress Indeterminate"
          code={`<div className="space-y-4">
  <Progress indeterminate />
  <Progress indeterminate speed="slow" />
  <Progress indeterminate speed="fast" />
</div>`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <p>Normal Speed (default):</p>
              <Progress indeterminate />
            </div>
            <div className="space-y-2">
              <p>Slow Speed:</p>
              <Progress indeterminate speed="slow" />
            </div>
            <div className="space-y-2">
              <p>Fast Speed:</p>
              <Progress indeterminate speed="fast" />
            </div>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
