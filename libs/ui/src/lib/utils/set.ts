
/**
 * Union two sets.
 * 
 * @param a 
 * @param b 
 * @returns union of a and b
 */
export const union = <T,>(a:Set<T>, b:Set<T>) => {
  const _union = new Set(a);
  for (const e of b) {
    _union.add(e)
  }
  return _union;
}