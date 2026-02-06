import type * as React from 'react';

// Types
export type AutocompleteOption = {
  value: string;
  label: string;
};

export type AutocompleteSize = 'large' | 'medium' | 'small';
export type AutocompleteVariant = 'outlined' | 'underlined';

export interface AutocompleteProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'size'
  > {
  options?: AutocompleteOption[];
  onOptionsFetch?: (searchText: string) => Promise<AutocompleteOption[]>;
  placeholder?: string;
  emptyText?: string;
  loadingText?: string;
  className?: string;
  onValueChange?: (value: string) => void;
  onClear?: () => void;
  disabled?: boolean;
  label?: string;
  size?: AutocompleteSize;
  icon?: React.ReactNode;
  error?: boolean;
  variant?: AutocompleteVariant;
  clearable?: boolean;
  value?: string;
  isLoading?: boolean;
}

// Size classes configuration
export const AUTOCOMPLETE_SIZE_CLASSES: Record<
  AutocompleteSize,
  {
    container: string;
    label: string;
    inputContainer: string;
    input: string;
    icon: string;
  }
> = {
  large: {
    container: 'lsd:w-[208px]',
    label: 'lsd:mb-1.5 lsd:ml-[14px]',
    inputContainer: 'lsd:h-[40px]',
    input: 'lsd:px-[17px] lsd:py-[9px]',
    icon: 'lsd:px-[13px] lsd:py-[12px]',
  },
  medium: {
    container: 'lsd:w-[188px]',
    label: 'lsd:mb-1.5 lsd:ml-[14px]',
    inputContainer: 'lsd:h-[32px]',
    input: 'lsd:px-[13px] lsd:py-[5px]',
    icon: 'lsd:px-[11px] lsd:py-[8px]',
  },
  small: {
    container: 'lsd:w-[164px]',
    label: 'lsd:mb-1.5 lsd:ml-[12px]',
    inputContainer: 'lsd:h-[28px]',
    input: 'lsd:px-[11px] lsd:py-[5px]',
    icon: 'lsd:px-[9px] lsd:py-[6px]',
  },
};

// Debounce delay for async fetching
export const AUTOCOMPLETE_DEBOUNCE_DELAY = 300;
