export function getTextSizeClasses(size: 'large' | 'medium' | 'small'): string {
  switch (size) {
    case 'large':
      return 'lsd:text-lg file:lsd:text-lg';
    case 'medium':
      return 'lsd:text-base file:lsd:text-base';
    case 'small':
      return 'lsd:text-sm file:lsd:text-sm';
    default:
      return 'lsd:text-base file:lsd:text-base';
  }
}

export function getVerticalPaddingClasses(
  size: 'large' | 'medium' | 'small',
): string {
  switch (size) {
    case 'large':
      return 'lsd:py-4';
    case 'medium':
      return 'lsd:py-3';
    case 'small':
      return 'lsd:py-2';
    default:
      return 'lsd:py-3';
  }
}

export function getLabelSizeClasses(
  size: 'large' | 'medium' | 'small',
): string {
  switch (size) {
    case 'large':
      return 'lsd:text-base';
    case 'medium':
      return 'lsd:text-sm';
    case 'small':
      return 'lsd:text-xs';
    default:
      return 'lsd:text-sm';
  }
}
