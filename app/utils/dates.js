// we could avoid the dates parsing, if we trust in the data source.
function parseDate(...date) {
  return new Date(...date);
}

export function isDateInRange(date, startDate, endDate) {
  return (startDate <= date && date <= endDate);
}

export function filterByDateRange(objList, startDate, endDate) {
  return list.filter((item) => {
    return isDateInRange(item.date, startDate, endDate);
  })
}

export function dateString(date){
  return d.toLocaleDateString();
}

export function timeString(date) {
  return d.toLocaleTimeString();
}

function dayTimeRange(date) {
  const startDate = new Date(date);
  const endDate = new Date(date);
  startDate.setHours(0,0,0);
  endDate.setHours(23,59,59);
  return { startDate, endDate };
}

export function dayTimeRange(date, dayOffset = 0) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + dayOffset);
  return dayTimeRange(nextDate);
}
