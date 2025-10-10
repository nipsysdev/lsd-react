'use client';

import { SearchIcon, XIcon } from 'lucide-react';
import * as React from 'react';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export type AutocompleteOption = {
  value: string;
  label: string;
};

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
  size?: 'large' | 'medium' | 'small';
  icon?: React.ReactNode;
  error?: boolean;
  variant?: 'outlined' | 'underlined';
  clearable?: boolean;
  value?: string;
  isLoading?: boolean;
}

const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options,
      onOptionsFetch,
      placeholder = 'Search...',
      emptyText = 'No results found.',
      loadingText = 'Loading...',
      className,
      onValueChange,
      onClear,
      disabled = false,
      label,
      size = 'large',
      icon,
      error = false,
      variant = 'outlined',
      clearable = false,
      value: controlledValue,
      isLoading: externalIsLoading,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState('');
    const value =
      controlledValue !== undefined ? controlledValue : internalValue;
    const [searchText, setSearchText] = React.useState('');
    const [asyncOptions, setAsyncOptions] = React.useState<
      AutocompleteOption[]
    >([]);
    const [internalIsLoading, setInternalIsLoading] = React.useState(false);
    const isLoading =
      externalIsLoading !== undefined ? externalIsLoading : internalIsLoading;
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Forward ref to inputRef
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleSelect = React.useCallback(
      (currentValue: string) => {
        if (controlledValue === undefined) {
          setInternalValue(currentValue);
        }
        setSearchText('');
        setOpen(false);
        onValueChange?.(currentValue);
      },
      [onValueChange, controlledValue],
    );

    const onCancel = () => {
      if (controlledValue === undefined) {
        setInternalValue('');
      }
      setSearchText('');
      onValueChange?.('');
      onClear?.();
    };

    // Fetch options asynchronously when onOptionsFetch is provided
    React.useEffect(() => {
      if (onOptionsFetch && open && externalIsLoading === undefined) {
        setInternalIsLoading(true);
        const fetchOptions = async () => {
          try {
            const fetchedOptions = await onOptionsFetch(searchText);
            setAsyncOptions(fetchedOptions);
          } catch (error) {
            console.error('Error fetching options:', error);
            setAsyncOptions([]);
          } finally {
            setInternalIsLoading(false);
          }
        };

        // Debounce the fetch to avoid excessive API calls
        const timer = setTimeout(() => {
          fetchOptions();
        }, 300);

        return () => clearTimeout(timer);
      }
    }, [onOptionsFetch, searchText, open, externalIsLoading]);

    // Filter options based on search text
    const filteredOptions = React.useMemo(() => {
      if (onOptionsFetch) {
        // For async options, we don't filter locally as the server should handle it
        return asyncOptions;
      }

      if (!options) return [];

      if (!searchText) return options;
      return options.filter((option) =>
        option.label.toLowerCase().startsWith(searchText.toLowerCase()),
      );
    }, [options, asyncOptions, searchText, onOptionsFetch]);

    const inputId = props.id || 'autocomplete-input';

    // Size classes
    const sizeClasses = {
      large: {
        container: 'w-[208px]',
        label: 'mb-1.5 ml-[14px]',
        inputContainer: 'h-[40px]',
        input: 'px-[17px] py-[9px]',
        icon: 'px-[13px] py-[12px]',
      },
      medium: {
        container: 'w-[188px]',
        label: 'mb-1.5 ml-[14px]',
        inputContainer: 'h-[32px]',
        input: 'px-[13px] py-[5px]',
        icon: 'px-[11px] py-[8px]',
      },
      small: {
        container: 'w-[164px]',
        label: 'mb-1.5 ml-[12px]',
        inputContainer: 'h-[28px]',
        input: 'px-[11px] py-[5px]',
        icon: 'px-[9px] py-[6px]',
      },
    };

    const currentSize = sizeClasses[size];

    return (
      <div className={cn('box-border', currentSize.container, className)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm',
              currentSize.label,
              disabled ? 'text-lsd-text-secondary' : 'text-lsd-text-primary',
            )}
          >
            {label}
          </label>
        )}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div
              className={cn(
                'flex justify-between',
                currentSize.inputContainer,
                variant === 'outlined'
                  ? disabled
                    ? 'border border-lsd-text-secondary'
                    : 'border border-lsd-border-primary'
                  : disabled
                    ? 'border border-transparent border-b-lsd-text-secondary'
                    : 'border border-transparent border-b-lsd-border-primary',
                disabled ? 'cursor-not-allowed' : 'cursor-pointer',
              )}
            >
              <input
                ref={inputRef}
                id={inputId}
                value={
                  value
                    ? options?.find((opt) => opt.value === value)?.label ||
                      asyncOptions.find((opt) => opt.value === value)?.label ||
                      ''
                    : ''
                }
                placeholder={placeholder}
                onChange={(e) => setSearchText(e.target.value)}
                disabled={disabled}
                readOnly
                className={cn(
                  'border-none outline-none bg-none w-full text-[14px]',
                  currentSize.input,
                  disabled
                    ? 'text-lsd-text-secondary'
                    : 'text-lsd-text-primary',
                  error && 'line-through',
                  '[&::placeholder]:text-lsd-text-primary [&::placeholder]:opacity-30',
                )}
                {...props}
              />
              {icon && (
                <div className={cn('flex items-center', currentSize.icon)}>
                  {icon}
                </div>
              )}
              {value && clearable && (
                <button
                  type="button"
                  onClick={onCancel}
                  disabled={disabled}
                  className={cn(
                    'flex items-center',
                    currentSize.icon,
                    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                  )}
                >
                  <XIcon
                    className={cn(
                      'h-4 w-4',
                      disabled
                        ? 'text-lsd-text-secondary'
                        : 'text-lsd-icon-primary',
                    )}
                  />
                </button>
              )}
            </div>
          </PopoverTrigger>
          <PopoverContent
            className={cn(
              'w-full p-0',
              'bg-lsd-surface-primary border-lsd-border-primary',
            )}
            align="start"
            sideOffset={0}
          >
            <Command className="rounded-none border-none shadow-none">
              <CommandInput
                value={searchText}
                onValueChange={setSearchText}
                className="h-9 border-none"
                placeholder={placeholder}
              />
              <CommandList>
                {isLoading ? (
                  <CommandEmpty>{loadingText}</CommandEmpty>
                ) : filteredOptions.length === 0 ? (
                  <CommandEmpty>{emptyText}</CommandEmpty>
                ) : (
                  filteredOptions?.map((option) => {
                    const inputValue = searchText;
                    const matchedPart = option.label.slice(
                      0,
                      inputValue.length,
                    );
                    const remainingPart = option.label.slice(inputValue.length);

                    return (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        keywords={[option.label]}
                        onSelect={() => handleSelect(option.value)}
                        className="hover:underline focus:underline cursor-pointer data-[selected=true]:underline"
                      >
                        <span className="block overflow-hidden whitespace-nowrap text-ellipsis">
                          {matchedPart}
                          <span className="opacity-50 whitespace-pre">
                            {remainingPart}
                          </span>
                        </span>
                      </CommandItem>
                    );
                  })
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);

Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
