export const componentStatuses = [
  'info',
  'success',
  'warning',
  'error',
] as const
export const brandColors = ['primary', 'secondary', 'accent'] as const
export const componentColors = [
  ...brandColors,
  'ghost',
  ...componentStatuses,
] as const
export const bgColors = ['base-100', 'base-200', 'base-300', 'neutral'] as const
