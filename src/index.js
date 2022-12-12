const state = {
    temp: 72,
    city: 'San Luis Obispo',
    lat: 35.2828,
    lon: -120.6596,
};

// WAVE 1 //
let tempValue = state.temp;
const tempControl = document.querySelector('#tempValue');

const increaseTemp = () => {
    tempValue += 1;
    tempControl.textContent = `${tempValue}`;
};

const decreaseTemp = () => {
    tempValue -= 1;
    tempControl.textContent = `${tempValue}`;
};

const changeTempColor = () => {
    if (tempValue >= 80) {
        tempControl.style.color = 'crimson';
    } else if (tempValue >= 70) {
        tempControl.style.color = 'coral';
    } else if (tempValue >= 60) {
        tempControl.style.color = 'peru';
    } else if (tempValue >= 50) {
        tempControl.style.color = 'olive';
    } else if (tempValue <= 49) {
        tempControl.style.color = 'steelblue';
    }
};

const upButton = document.querySelector('#increaseTempControl');
upButton.addEventListener('click', increaseTemp);

const downButton = document.querySelector('#decreaseTempControl');
downButton.addEventListener('click', decreaseTemp);

const changeTempColorUp = document.querySelector('#increaseTempControl');
changeTempColorUp.addEventListener('click', changeTempColor);

const changeTempColorDown = document.querySelector('#decreaseTempControl');
changeTempColorDown.addEventListener('click', changeTempColor);

// WAVE 2 //
const landscapeContainer = document.querySelector('#landscape');

const changeLandscape = () => {
    if (tempValue >= 80) {
        landscapeContainer.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (tempValue >= 70) {
        landscapeContainer.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (tempValue >= 60) {
        landscapeContainer.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (tempValue <= 59) {
        landscapeContainer.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};

const changeLandscapeUp = document.querySelector('#increaseTempControl');
changeLandscapeUp.addEventListener('click', changeLandscape);

const changeLandscapeDown = document.querySelector('#decreaseTempControl');
changeLandscapeDown.addEventListener('click', changeLandscape);

// Wave 3 //
let city = state.city;
const cityName = document.querySelector('#cityName');

const changeCity = () => {
    const changeCityInput = document.querySelector('#inputCity');
    state.city = changeCityInput.value;
    cityName.textContent = state.city;
};

const inputCity = document.querySelector('#inputCity');
inputCity.addEventListener('input', changeCity);

// Wave 4 //
const kelvinToFahrenheit = (temp) => {
  return (temp - 273.15) * (9 / 5) + 32;
};

const getLiveTemp = async () => {
    const response = await axios.get('http://127.0.0.1:5000/weather', {
        params: {
            lat: state.lat,
            lon: state.lon,
        },
    });
    const weather = kelvinToFahrenheit(response.data.main.temp);

    tempValue = Math.round(weather);
    tempControl.textContent = `${tempValue}`;
};

const getLatLon = async () => {
    const response = await axios.get('http://127.0.0.1:5000/location', {
        params: {
            q: state.city,
        },
    });
    state.lat = response.data[0].lat;
    state.lon = response.data[0].lon;
    getLiveTemp();
    changeLandscape();
};

const currentTempButton = document.querySelector('#currentTempButton');
currentTempButton.addEventListener('click', getLatLon);

// Wave 5 //
const changeSky = () => {
    const inputSky = document.getElementById('sky-select').value;
    const skyContainer = document.getElementById('sky');
    let sky = '';
    let skyColor = '';
    if (inputSky === 'Sunny') {
        sky = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
        skyColor = 'sunny';
    } else if (inputSky === 'Cloudy') {
        sky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
        skyColor = 'cloudy';
    } else if (inputSky === 'Rainy') {
        sky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
        skyColor = 'rainy';
    } else if (inputSky === 'Snowy') {
        sky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
        skyColor = 'snowy';
    }
    skyContainer.textContent = sky;
    const landscape = document.getElementById('gardenContent');
    landscape.classList = `garden__content ${skyColor}`;
};

const skySelect = document.getElementById('sky-select');
skySelect.addEventListener('change', changeSky);

// Wave 6  //
const resetCity = () => {
    const changeCityInput = document.querySelector('#inputCity');
    changeCityInput.value = 'San Luis Obispo';
    cityName.textContent = 'San Luis Obispo';
};

const cityButton = document.getElementById('cityButton');
cityButton.addEventListener('click', resetCity);