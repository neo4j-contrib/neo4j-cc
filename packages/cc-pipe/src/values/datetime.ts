
import { DateTime, DurationInput } from "luxon"

/**
 * Generates a range of dates.
 * 
 * @param start starting date for range
 * @param end up to but not including this end date
 * @param interval duration between subsequent dates within range 
 */
export function* dayRange(start:DateTime, end:DateTime, interval:DurationInput = {day:1}) {
  let day = start;
  while (day < end) {
    yield day;
    day = day.plus(interval)
  }
}
