'use client';

import { XIcon } from 'lucide-react';
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

    const currentSize = sizeClasses[size];

    return (
      <div className={cn('lsd:box-border', currentSize.container, className)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'lsd:block lsd:text-sm',
              currentSize.label,
              disabled
                ? 'lsd:text-lsd-text-secondary'
                : 'lsd:text-lsd-text-primary',
            )}
          >
            {label}
          </label>
        )}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div
              className={cn(
                'lsd:flex lsd:justify-between',
                currentSize.inputContainer,
                variant === 'outlined'
                  ? disabled
                    ? 'lsd:border lsd:border-lsd-text-secondary'
                    : 'lsd:border lsd:border-lsd-border-primary'
                  : disabled
                    ? 'lsd:border lsd:border-transparent lsd:border-b-lsd-text-secondary'
                    : 'lsd:border lsd:border-transparent lsd:border-b-lsd-border-primary',
                disabled ? 'lsd:cursor-not-allowed' : 'lsd:cursor-pointer',
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
                  'lsd:border-none lsd:outline-none lsd:bg-none lsd:w-full lsd:text-[14px]',
                  currentSize.input,
                  disabled
                    ? 'lsd:text-lsd-text-secondary'
                    : 'lsd:text-lsd-text-primary',
                  error && 'lsd:line-through',
                  'lsd:[&::placeholder]:text-lsd-text-primary lsd:[&::placeholder]:opacity-30',
                )}
                {...props}
              />
              {icon && (
                <div
                  className={cn('lsd:flex lsd:items-center', currentSize.icon)}
                >
                  {icon}
                </div>
              )}
              {value && clearable && (
                <button
                  type="button"
                  onClick={onCancel}
                  disabled={disabled}
                  className={cn(
                    'lsd:flex lsd:items-center',
                    currentSize.icon,
                    disabled ? 'lsd:cursor-not-allowed' : 'lsd:cursor-pointer',
                  )}
                >
                  <XIcon
                    className={cn(
                      'lsd:h-4 lsd:w-4',
                      disabled
                        ? 'lsd:text-lsd-text-secondary'
                        : 'lsd:text-lsd-icon-primary',
                    )}
                  />
                </button>
              )}
            </div>
          </PopoverTrigger>
          <PopoverContent
            className={cn(
              'lsd:w-full lsd:p-0',
              'lsd:bg-lsd-surface-primary lsd:border-lsd-border-primary',
            )}
            align="start"
            sideOffset={0}
          >
            <Command className="lsd:rounded-none lsd:border-none lsd:shadow-none">
              <CommandInput
                value={searchText}
                onValueChange={setSearchText}
                className="lsd:h-9 lsd:border-none"
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
                        className="lsd:hover:underline lsd:focus:underline lsd:cursor-pointer lsd:data-[selected=true]:underline"
                      >
                        <span className="lsd:block lsd:overflow-hidden lsd:whitespace-nowrap lsd:text-ellipsis">
                          {matchedPart}
                          <span className="lsd:opacity-50 lsd:whitespace-pre">
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
