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
  options: AutocompleteOption[];
  placeholder?: string;
  emptyText?: string;
  className?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  label?: string;
  size?: 'large' | 'medium' | 'small';
  withIcon?: boolean;
  error?: boolean;
  variant?: 'outlined' | 'underlined';
}

const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options,
      placeholder = 'Search...',
      emptyText = 'No results found.',
      className,
      onValueChange,
      disabled = false,
      label,
      size = 'large',
      withIcon = false,
      error = false,
      variant = 'outlined',
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Forward ref to inputRef
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleSelect = React.useCallback(
      (currentValue: string) => {
        setValue(currentValue);
        setOpen(false);
        onValueChange?.(currentValue);
      },
      [onValueChange],
    );

    const onCancel = () => {
      setValue('');
      inputRef.current?.focus();
    };

    // Filter options based on input value
    const filteredOptions = React.useMemo(() => {
      if (!value) return options;
      return options.filter((option) =>
        option.label.toLowerCase().startsWith(value.toLowerCase()),
      );
    }, [options, value]);

    const inputId = props.id || 'autocomplete-input';

    // Size classes
    const sizeClasses = {
      large: {
        container: 'w-[208px]',
        label: 'mb-1.5 ml-[18px]',
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
              'text-lsd-text-primary',
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
                  ? 'border border-lsd-border-primary'
                  : 'border border-transparent border-b-lsd-border-primary',
              )}
            >
              <input
                ref={inputRef}
                id={inputId}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                disabled={disabled}
                className={cn(
                  'border-none outline-none bg-none w-full text-[14px]',
                  currentSize.input,
                  'text-lsd-text-primary',
                  error && 'line-through',
                  '[&::placeholder]:text-lsd-text-primary [&::placeholder]:opacity-30',
                )}
                {...props}
              />
              {withIcon && value ? (
                <button
                  type="button"
                  onClick={onCancel}
                  className={cn(
                    'cursor-pointer flex items-center',
                    currentSize.icon,
                  )}
                >
                  <XIcon className="h-4 w-4 text-lsd-icon-primary" />
                </button>
              ) : withIcon && !value ? (
                <div className={cn('flex items-center', currentSize.icon)}>
                  <SearchIcon className="h-4 w-4 text-lsd-icon-primary" />
                </div>
              ) : null}
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
                value={value}
                onValueChange={setValue}
                className="h-9 border-none"
                placeholder={placeholder}
              />
              <CommandList>
                <CommandEmpty>{emptyText}</CommandEmpty>
                {filteredOptions.map((option) => {
                  const inputValue = value;
                  const matchedPart = option.label.slice(0, inputValue.length);
                  const remainingPart = option.label.slice(inputValue.length);

                  return (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleSelect(option.value)}
                      className="hover:underline focus:underline"
                    >
                      <span className="block overflow-hidden whitespace-nowrap text-ellipsis">
                        {matchedPart}
                        <span className="opacity-50 whitespace-pre">
                          {remainingPart}
                        </span>
                      </span>
                    </CommandItem>
                  );
                })}
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
