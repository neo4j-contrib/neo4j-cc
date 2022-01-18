

export type Weekly = Partial<Record<string, number>>

export interface Ninja {
  user: string,
  isNinja: boolean,
  discourseUser: string,
  categories: {
    name: string,
    id: number
  }[],
  weekly: Weekly
}

