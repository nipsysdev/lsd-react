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
          '--normal-bg': 'var(--lsd-surface)',
          '--normal-text': 'var(--lsd-text-primary)',
          '--normal-border': 'var(--lsd-border)',
          '--success-bg': 'var(--lsd-surface)',
          '--success-border': 'var(--lsd-success)',
          '--success-text': 'var(--lsd-success-text)',
          '--error-bg': 'var(--lsd-surface)',
          '--error-border': 'var(--lsd-destructive)',
          '--error-text': 'var(--lsd-destructive-text)',
          '--warning-bg': 'var(--lsd-surface)',
          '--warning-border': 'var(--lsd-warning)',
          '--warning-text': 'var(--lsd-warning-text)',
          '--info-bg': 'var(--lsd-surface)',
          '--info-border': 'var(--lsd-info)',
          '--info-text': 'var(--lsd-info-text)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
