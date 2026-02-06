'use client';

import * as React from 'react';
import type { AutocompleteOption } from './types';
import { AUTOCOMPLETE_DEBOUNCE_DELAY } from './types';

interface UseAutocompleteFetchOptions {
  onOptionsFetch?: (searchText: string) => Promise<AutocompleteOption[]>;
  searchText: string;
  open: boolean;
  externalIsLoading?: boolean;
}

interface UseAutocompleteFetchResult {
  asyncOptions: AutocompleteOption[];
  isLoading: boolean;
}

export function useAutocompleteFetch({
  onOptionsFetch,
  searchText,
  open,
  externalIsLoading,
}: UseAutocompleteFetchOptions): UseAutocompleteFetchResult {
  const [asyncOptions, setAsyncOptions] = React.useState<AutocompleteOption[]>(
    [],
  );
  const [internalIsLoading, setInternalIsLoading] = React.useState(false);

  const isLoading =
    externalIsLoading !== undefined ? externalIsLoading : internalIsLoading;

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
      }, AUTOCOMPLETE_DEBOUNCE_DELAY);

      return () => clearTimeout(timer);
    }
  }, [onOptionsFetch, searchText, open, externalIsLoading]);

  return { asyncOptions, isLoading };
}
