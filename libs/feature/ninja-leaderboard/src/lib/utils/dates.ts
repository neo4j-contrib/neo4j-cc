
import { format, parseISO } from 'date-fns/fp'


export const formatHumanMonth = format('MMMM yyyy')

export const formatISODate = format('yyyy-MM-dd')
export const parseISODate = parseISO