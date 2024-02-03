
'use strict';

const api_key = "8312e209e7fc93aea405e7a3bde4b887";

/**
 * 
 * @param {string} URL 
 * @param {Function} callback 
 */
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => callback(data));
   
};
/**
 * Fetch local time data from WorldTimeAPI based on timezone
 * @param {number} timezone
 * @param {Function} callback
 */
export const fetchLocalTime = function (timezone, callback) {
  const worldTimeAPIURL = `http://worldtimeapi.org/api/timezone/Etc/GMT${timezone >= 0 ? `+${timezone}` : timezone}`;
  
  fetch(worldTimeAPIURL)
      .then((res) => {
          if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
      })
      .then((data) => callback(data))
      .catch((error) => console.error('Error fetching local time:', error));
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=9`;
  },
  /**
   * 
   * @param {string} query 
   * 
   */
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=9`;
  },
};
