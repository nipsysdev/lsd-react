export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'outlined' | 'underlined';
  size?: 'large' | 'medium' | 'small';
  label?: React.ReactNode;
  supportingText?: React.ReactNode;
  error?: boolean;
}
