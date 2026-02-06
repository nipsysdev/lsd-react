import type { BorderVariant, SizeVariant } from '@/lib/types';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: BorderVariant;
  size?: SizeVariant;
  label?: React.ReactNode;
  supportingText?: React.ReactNode;
  error?: boolean;
}
