
export const randomPick = <T,>(words:T[]) => words[Math.floor(Math.random() * words.length)]


export function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}