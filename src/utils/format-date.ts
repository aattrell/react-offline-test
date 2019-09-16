export default function formatDate(unformattedDate: string) {
  const date = new Date(unformattedDate);

  // I decided against using toLocaleDateString() as there was an inconsistency
  // with how Jest handled the dates, and felt it wasn't necessary to use a third
  // party library like moment.js

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const hoursData = date.getUTCHours();
  const hours = hoursData > 12 ? hoursData - 12 : hoursData;
  const minuteData = date.getUTCMinutes();
  const minutes = minuteData < 10 ? `0${minuteData}` : minuteData;
  const monthName = months[date.getUTCMonth()];
  const timeOfDay = hoursData < 12 ? "am" : "pm";

  return `${monthName} ${date.getUTCDate()}, ${hours}:${minutes}${timeOfDay}`;
}
