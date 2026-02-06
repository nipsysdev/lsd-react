'use client';

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { PopoverContent } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import type { AutocompleteOption } from './types';

interface AutocompleteContentProps {
  searchText: string;
  onSearchTextChange: (text: string) => void;
  placeholder: string;
  loadingText: string;
  emptyText: string;
  isLoading: boolean;
  filteredOptions: AutocompleteOption[];
  onSelect: (value: string) => void;
}

export function AutocompleteContent({
  searchText,
  onSearchTextChange,
  placeholder,
  loadingText,
  emptyText,
  isLoading,
  filteredOptions,
  onSelect,
}: AutocompleteContentProps) {
  return (
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
          onValueChange={onSearchTextChange}
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
              const matchedPart = option.label.slice(0, inputValue.length);
              const remainingPart = option.label.slice(inputValue.length);

              return (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  keywords={[option.label]}
                  onSelect={() => onSelect(option.value)}
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
  );
}
