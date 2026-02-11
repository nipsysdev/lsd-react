import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function ProgressFixture() {
  const [progress, setProgress] = useState(30);
  const [paused, setPaused] = useState(false);

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

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Color Variants</h2>
        <CodeExample
          title="Progress Color Variants"
          code={`<div className="lsd:space-y-4">
  <Progress value={50} variant="default" />
  <Progress value={50} variant="success" />
  <Progress value={50} variant="warning" />
  <Progress value={50} variant="destructive" />
</div>`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:space-y-2">
              <p>Default:</p>
              <Progress value={50} variant="default" />
            </div>
            <div className="lsd:space-y-2">
              <p>Success:</p>
              <Progress value={50} variant="success" />
            </div>
            <div className="lsd:space-y-2">
              <p>Warning:</p>
              <Progress value={50} variant="warning" />
            </div>
            <div className="lsd:space-y-2">
              <p>Destructive:</p>
              <Progress value={50} variant="destructive" />
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Sizes</h2>
        <CodeExample
          title="Progress Sizes"
          code={`<div className="lsd:space-y-4">
  <Progress value={50} size="sm" />
  <Progress value={50} size="md" />
  <Progress value={50} size="lg" />
</div>`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:space-y-2">
              <p>Small:</p>
              <Progress value={50} size="sm" />
            </div>
            <div className="lsd:space-y-2">
              <p>Medium (default):</p>
              <Progress value={50} size="md" />
            </div>
            <div className="lsd:space-y-2">
              <p>Large:</p>
              <Progress value={50} size="lg" />
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Label Display</h2>
        <CodeExample
          title="Progress Label Display"
          code={`<div className="lsd:space-y-4">
  <Progress value={50} showLabel />
  <Progress value={75} showLabel />
  <Progress value={100} showLabel />
</div>`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:space-y-2">
              <p>50%:</p>
              <Progress value={50} showLabel />
            </div>
            <div className="lsd:space-y-2">
              <p>75%:</p>
              <Progress value={75} showLabel />
            </div>
            <div className="lsd:space-y-2">
              <p>100%:</p>
              <Progress value={100} showLabel />
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Label Position</h2>
        <CodeExample
          title="Progress Label Position"
          code={`<div className="lsd:space-y-4">
  <Progress value={50} showLabel labelPosition="top" />
  <Progress value={75} showLabel labelPosition="bottom" />
</div>`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:space-y-2">
              <p>Label on top (default):</p>
              <Progress value={50} showLabel labelPosition="top" />
            </div>
            <div className="lsd:space-y-2">
              <p>Label on bottom:</p>
              <Progress value={75} showLabel labelPosition="bottom" />
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Animation Control</h2>
        <CodeExample
          title="Progress Animation Control"
          code={`function AnimationControlDemo() {
  const [paused, setPaused] = useState(false);
  
  return (
    <div className="lsd:space-y-4">
      <div className="lsd:flex lsd:items-center lsd:gap-4">
        <Button
          variant="outlined"
          size="sm"
          onClick={() => setPaused(!paused)}
        >
          {paused ? 'Resume' : 'Pause'}
        </Button>
      </div>
      <Progress indeterminate paused={paused} />
    </div>
  );
}`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:flex lsd:items-center lsd:gap-4">
              <Button
                variant="outlined"
                size="sm"
                onClick={() => setPaused(!paused)}
              >
                {paused ? 'Resume' : 'Pause'}
              </Button>
            </div>
            <div className="lsd:space-y-2">
              <p>Indeterminate (paused: {paused.toString()}):</p>
              <Progress indeterminate paused={paused} />
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Combined Features</h2>
        <CodeExample
          title="Progress Combined Features"
          code={`<div className="lsd:space-y-4">
  <Progress
    value={75}
    variant="success"
    showLabel
  />
  <Progress
    value={40}
    variant="warning"
    showLabel
    labelPosition="bottom"
  />
  <Progress
    indeterminate
    variant="destructive"
    speed="fast"
  />
</div>`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:space-y-2">
              <p>Success with label:</p>
              <Progress value={75} variant="success" showLabel />
            </div>
            <div className="lsd:space-y-2">
              <p>Warning with label on bottom:</p>
              <Progress
                value={40}
                variant="warning"
                showLabel
                labelPosition="bottom"
              />
            </div>
            <div className="lsd:space-y-2">
              <p>Destructive indeterminate fast:</p>
              <Progress indeterminate variant="destructive" speed="fast" />
            </div>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
