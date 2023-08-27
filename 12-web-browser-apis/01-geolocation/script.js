
// ---------------------------------------------------------------------------------------------------
// GEOLOCATION API
// ---------------------------------------------------------------------------------------------------
options = {}

const myLocation = navigator.geolocation.getCurrentPosition(
    ((pos) => console.log(pos)), 
    (error) => console.log(`${error.code} - ${error.code}`), 
    options);


// ---------------------------------------------------------------------------------------------------
// -----> 'getCurrentPosition()' method
// ---------------------------------------------------------------------------------------------------
const curSuccess = (position) => {
    const coords = position.coords;
  
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Within: ${coords.accuracy} meters`);
  }


const curError = (err) => {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// ---------------------------------------------------------------------------------------------------
// -----> 'watchPosition()' method
// ---------------------------------------------------------------------------------------------------

const target = {
  latitude: 38.7400196,
  longitude: -9.1319489,
};

function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You have reached Rua Actor Isidoro nº26');
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions
);
