'use client';

import { XIcon } from 'lucide-react';
import * as React from 'react';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { AutocompleteContent } from './AutocompleteList';
import type { AutocompleteProps } from './types';
import { AUTOCOMPLETE_SIZE_CLASSES } from './types';
import { useAutocompleteFetch } from './useAutocompleteFetch';

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
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Forward ref to inputRef
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const { asyncOptions, isLoading } = useAutocompleteFetch({
      onOptionsFetch,
      searchText,
      open,
      externalIsLoading,
    });

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
    const currentSize = AUTOCOMPLETE_SIZE_CLASSES[size];

    const displayValue = value
      ? options?.find((opt) => opt.value === value)?.label ||
        asyncOptions?.find((opt) => opt.value === value)?.label ||
        ''
      : '';

    return (
      <div
        {...props}
        className={cn('lsd:box-border', currentSize.container, className)}
      >
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
                value={displayValue}
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
          <AutocompleteContent
            searchText={searchText}
            onSearchTextChange={setSearchText}
            placeholder={placeholder}
            loadingText={loadingText}
            emptyText={emptyText}
            isLoading={isLoading}
            filteredOptions={filteredOptions}
            onSelect={handleSelect}
          />
        </Popover>
      </div>
    );
  },
);

Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
