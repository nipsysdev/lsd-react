import type { SizeVariant } from '@/lib/types';

export function getTextSizeClasses(size: SizeVariant): string {
  switch (size) {
    case 'xs':
      return 'lsd:text-xs file:lsd:text-xs';
    case 'sm':
      return 'lsd:text-sm file:lsd:text-sm';
    case 'md':
      return 'lsd:text-base file:lsd:text-base';
    case 'lg':
      return 'lsd:text-lg file:lsd:text-lg';
    case 'xl':
      return 'lsd:text-xl file:lsd:text-xl';
    default:
      return 'lsd:text-base file:lsd:text-base';
  }
}

export function getVerticalPaddingClasses(size: SizeVariant): string {
  switch (size) {
    case 'xs':
      return 'lsd:py-1';
    case 'sm':
      return 'lsd:py-2';
    case 'md':
      return 'lsd:py-3';
    case 'lg':
      return 'lsd:py-4';
    case 'xl':
      return 'lsd:py-5';
    default:
      return 'lsd:py-3';
  }
}

export function getLabelSizeClasses(size: SizeVariant): string {
  switch (size) {
    case 'xs':
      return 'lsd:text-xs';
    case 'sm':
      return 'lsd:text-xs';
    case 'md':
      return 'lsd:text-sm';
    case 'lg':
      return 'lsd:text-base';
    case 'xl':
      return 'lsd:text-lg';
    default:
      return 'lsd:text-sm';
  }
}
