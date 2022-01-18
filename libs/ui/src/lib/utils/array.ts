/**
 * Picks a random element from a source array.
 * 
 * @param elements source array
 * @returns a random element
 */
 export const randomPick = <T,>(elements:T[]) => elements[Math.floor(Math.random() * elements.length)]

 /**
  * Filters non-falsy strings into a single joined string.
  * 
  * @param classes 
  * @returns 
  */
 export function classNames(...classes:string[]) {
   return classes.filter(Boolean).join(' ')
 }