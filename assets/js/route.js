'use strict';

import { updateWeather, error404 } from "./app.js";

const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474";

const currentLocation = function () {
  window.navigator.geolocation.getCurrentPosition(
    (res) => {
      const { latitude, longitude } = res.coords;
      updateWeather(`lat=${latitude}&lon=${longitude}`);
    },
    (err) => {
      window.location.hash = defaultLocation;
    }
  );
}
/**
 * 
 * @param {string} query 
 * @returns 
 */
const searchedLocation = (query) => updateWeather(...query.split("&"));

const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
]);

const checkHash = function () {
  const requestURL = window.location.hash.slice(1);

  const [route, query] = requestURL.includes("?") ? requestURL.split("?") : [requestURL];

  // Ensure that the routes map has the 'route' key before calling the function
  if (routes.get(route)) {
    routes.get(route)(query);
  } else {
    error404();
  }
};

// Listen for hash changes and load the appropriate route
window.addEventListener("hashchange", checkHash);

// On page load, check the hash to load the initial route
window.addEventListener("load", function () {
  if (!window.location.hash) {
    window.location.hash = "#/current-location";
  } else {
    checkHash();
  }
});
