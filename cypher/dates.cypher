WITH 2018 as year
WITH [day in range (1, 365) | year + "-" + apoc.number.format(day, "000") ] as dates
UNWIND dates as yearly
UNWIND yearly as dayOfYear
RETURN date(dayOfYear)

WITH date("2018-06-01") AS startDate
WITH [day in range(0, 100) | startDate + duration({days: day})] AS dates
RETURN dates