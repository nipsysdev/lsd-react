'use client';

import { SearchIcon } from 'lucide-react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
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

export interface AutocompleteProps {
  options: AutocompleteOption[];
  placeholder?: string;
  emptyText?: string;
  className?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

const Autocomplete = React.forwardRef<HTMLButtonElement, AutocompleteProps>(
  (
    {
      options,
      placeholder = 'Search...',
      emptyText = 'No results found.',
      className,
      onValueChange,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const handleSelect = React.useCallback(
      (currentValue: string) => {
        setValue(currentValue);
        setOpen(false);
        onValueChange?.(currentValue);
      },
      [onValueChange],
    );

    return (
      <div className={cn('w-full', className)}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              variant="default"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
              disabled={disabled}
              {...props}
            >
              {value
                ? options.find((option) => option.value === value)?.label
                : placeholder}
              <SearchIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput
                placeholder={placeholder}
                value={value}
                onValueChange={setValue}
              />
              <CommandList>
                <CommandEmpty>{emptyText}</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={handleSelect}
                    >
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
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
