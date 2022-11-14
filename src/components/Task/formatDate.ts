import {Options} from './types';

export function formatDate(date: { toLocaleString: (arg0: string, arg1: Options) => string; }) {
  const options = {
    year: "numeric",
    month: "short",
    week: "numeric",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleString("en", options).toLowerCase();
}
