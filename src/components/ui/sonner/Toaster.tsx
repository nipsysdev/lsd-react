import { useTheme } from 'next-themes';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="lsd:toaster lsd:group"
      richColors
      style={
        {
          '--normal-bg': 'rgb(var(--lsd-surface-primary))',
          '--normal-text': 'rgb(var(--lsd-text-primary))',
          '--normal-border': 'rgb(var(--lsd-border))',
          '--success-bg': 'rgb(var(--lsd-surface-primary))',
          '--success-border': 'rgb(var(--lsd-success))',
          '--success-text': 'rgb(var(--lsd-success-text))',
          '--error-bg': 'rgb(var(--lsd-surface-primary))',
          '--error-border': 'rgb(var(--lsd-destructive))',
          '--error-text': 'rgb(var(--lsd-destructive-text))',
          '--warning-bg': 'rgb(var(--lsd-surface-primary))',
          '--warning-border': 'rgb(var(--lsd-warning))',
          '--warning-text': 'rgb(var(--lsd-warning-text))',
          '--info-bg': 'rgb(var(--lsd-surface-primary))',
          '--info-border': 'rgb(var(--lsd-info))',
          '--info-text': 'rgb(var(--lsd-info-text))',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
