'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * 
 * @param {number} dateUnix 
 * @param {number} timezone 
 * @returns {string}
 */

export const getDate = (dateUnix, timezone) => {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

/**
 * 
 * @param {number} timeUnix 
 * @param {number} timezone 
 * @returns {string} time string . format: "HH:MM AM/PM"
 */

export const getTime = (timeUnix, timezone) => {
  const date = new Date((timeUnix + timezone) * 1000);
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert 0 to 12

  // Ensure the hours and minutes are formatted with leading zeros if necessary
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${period}`;
};


/**
 * 
 * @param {number} timeUnix 
 * @param {number} timezone 
 * @returns {string}
 */

export const getHours = (timeUnix, timezone) => {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}: ${period}`;
};

/** 
 * 
 * @param {number} mps 
 * @returns {number}
 */

export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
};

export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk."
    },
    2: {
        level: "Fair",
        message: "Air quality is acceptable; however, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },
    3: {
        level: "Moderate",
        message: "Air quality is acceptable; however, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },
    4: {
        level: "Poor",
        message: "Air quality may pose a health concern for some people. The general public is less likely to be affected."
    },
    5: {
        level: "Very Poor",
        message: "Air quality is unhealthy. Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects."
    }
};
