const container = document.querySelector('.weather-card');
const searchInput = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
const weatherIcons = {
    0: "☀️",   // Clear sky
    1: "🌤️",  // Mainly clear
    2: "⛅",   // Partly cloudy
    3: "☁️",   // Overcast
    45: "🌫️", // Fog
    48: "🌫️", // Depositing rime fog
    51: "🌦️", // Light drizzle
    53: "🌦️", // Moderate drizzle
    55: "🌦️", // Dense drizzle
    56: "🌧️", // Freezing drizzle
    57: "🌧️", // Dense freezing drizzle
    61: "🌧️", // Slight rain
    63: "🌧️", // Moderate rain
    65: "🌧️", // Heavy rain
    66: "🌧️", // Freezing rain
    67: "🌧️", // Heavy freezing rain
    71: "🌨️", // Slight snow
    73: "🌨️", // Moderate snow
    75: "❄️", // Heavy snow
    77: "❄️", // Snow grains
    80: "🌦️", // Rain showers
    81: "🌧️", // Moderate rain showers
    82: "⛈️", // Violent rain showers
    85: "🌨️", // Snow showers
    86: "❄️", // Heavy snow showers
    95: "⛈️", // Thunderstorm
    96: "⛈️", // Thunderstorm with hail
    99: "⛈️", // Heavy thunderstorm with hail
};
const weatherDescriptions = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing Rime Fog",
    51: "Light Drizzle",
    53: "Moderate Drizzle",
    55: "Dense Drizzle",
    56: "Freezing Drizzle",
    57: "Dense Freezing Drizzle",
    61: "Slight Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    66: "Freezing Rain",
    67: "Heavy Freezing Rain",
    71: "Slight Snow",
    73: "Moderate Snow",
    75: "Heavy Snow",
    77: "Snow Grains",
    80: "Rain Showers",
    81: "Moderate Rain Showers",
    82: "Violent Rain Showers",
    85: "Snow Showers",
    86: "Heavy Snow Showers",
    95: "Thunderstorm",
    96: "Thunderstorm With Hail",
    99: "Heavy Thunderstorm With Hail"
};
let state = {
    weatherData: null,
    isLoading: false,
    errorMessage: null,
};

getWeather("Tehran");

searchInput.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        search()
    }
})
searchBtn.addEventListener('click', () => {
    search()
})

async function search() {
    if (searchInput && searchInput.value !== "") {
        await getWeather(searchInput.value)
    }
}
async function getWeather(cityName) {
    setState({ isLoading: true, errorMessage: null })
    try {
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
        const geoResponse = await fetch(geoUrl)
        if (!geoResponse.ok) throw new Error(`response status : ${geoResponse.status} , response message : ${geoResponse.statusText} `)
        const geo = await geoResponse.json()
        if (!geo.results || geo.results.length === 0) {
            throw new Error("City not found ")
        }
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${geo.results[0].latitude}&longitude=${geo.results[0].longitude}&current=temperature_2m,relative_humidity_2m,pressure_msl,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=4&timezone=auto`
        const wheatherResponse = await fetch(weatherUrl)
        if (!wheatherResponse.ok) throw new Error(`response status : ${wheatherResponse.status} , response message : ${wheatherResponse.statusText} `)
        setState({
            isLoading: false,
            weatherData: prepareResponse(await wheatherResponse.json(), geo),
            errorMessage: null
        })

    } catch (error) {
        setState({ isLoading: false, errorMessage: error.message })
    }
}
function setState(newState) {
    state = { ...state, ...newState }
    render()
}
function render() {
    if (state.isLoading) {
        showLoading()
    } else if (state.errorMessage) {
        showError(state.errorMessage)
    } else {
        renderWeatherCard(state.weatherData)
    }
}
function prepareResponse(data, geo) {
    const dateTime = new Date(data.current.time)
    const formatted = new Intl.DateTimeFormat("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
    }).format(dateTime);
    return {
        city: geo.results[0].name,
        date: formatted,
        icon: weatherIcons[data.current.weather_code],
        temp: data.current.temperature_2m,
        unit: '°C',
        description: weatherDescriptions[data.current.weather_code],
        details: {
            humidity: `${data.current.relative_humidity_2m}%`,
            wind: `${data.current.wind_speed_10m} km/h`,
            pressure: `${data.current.pressure_msl} hPa`
        },
        forecast: data.daily.time.slice(1, 4).map((date, index) => {
            const realIndex = index + 1;
            return {
                day: new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(new Date(date)),
                icon: weatherIcons[data.daily.weather_code[realIndex]],
                temp: `${data.daily.temperature_2m_max[realIndex]}°`
            }
        })
    }
}
function showError(message) {
    container.innerHTML = `<p class="error-message">Error : ${message}</p>`
}
function renderWeatherCard(data) {
    if (!container) {
        console.error('Weather card container not found!');
        return;
    }

    container.innerHTML = '';
    /* Default data */
    const weatherData = data || {
        city: '---',
        date: '--, -- --',
        icon: '☀️',
        temp: "--",
        unit: '°C',
        description: '--',
        details: {
            humidity: '--%',
            wind: '-- km/h',
            pressure: '---- hPa'
        },
        forecast: [
            { day: '--', icon: '⛅', temp: '--°' },
            { day: '--', icon: '🌧️', temp: '--°' },
            { day: '--', icon: '☁️', temp: '--°' }
        ]
    };

    // ============ 1. Weather Header
    const header = document.createElement('div');
    header.className = 'weather-header';

    const cityName = document.createElement('h2');
    cityName.className = 'city-name';
    cityName.textContent = weatherData.city;

    const dateSpan = document.createElement('span');
    dateSpan.className = 'date';
    dateSpan.textContent = weatherData.date;

    header.appendChild(cityName);
    header.appendChild(dateSpan);
    container.appendChild(header);

    // ============ 2. Weather Main 
    const main = document.createElement('div');
    main.className = 'weather-main';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'weather-icon';
    iconDiv.textContent = weatherData.icon;

    const tempDiv = document.createElement('div');
    tempDiv.className = 'temperature';

    const tempValue = document.createElement('span');
    tempValue.className = 'temp-value';
    tempValue.textContent = weatherData.temp;

    const tempUnit = document.createElement('span');
    tempUnit.className = 'temp-unit';
    tempUnit.textContent = weatherData.unit;

    tempDiv.appendChild(tempValue);
    tempDiv.appendChild(tempUnit);

    const descP = document.createElement('p');
    descP.className = 'weather-desc';
    descP.textContent = weatherData.description;

    main.appendChild(iconDiv);
    main.appendChild(tempDiv);
    main.appendChild(descP);
    container.appendChild(main);

    // ============ 3. Weather Details 
    const details = document.createElement('div');
    details.className = 'weather-details';

    const detailItems = [
        { label: 'humidity', value: weatherData.details.humidity },
        { label: 'wind', value: weatherData.details.wind },
        { label: 'pressure', value: weatherData.details.pressure }
    ];

    detailItems.forEach(item => {
        const detailItem = document.createElement('div');
        detailItem.className = 'detail-item';

        const labelSpan = document.createElement('span');
        labelSpan.className = 'detail-label';
        labelSpan.textContent = item.label;

        const valueSpan = document.createElement('span');
        valueSpan.className = 'detail-value';
        valueSpan.textContent = item.value;

        detailItem.appendChild(labelSpan);
        detailItem.appendChild(valueSpan);
        details.appendChild(detailItem);
    });

    container.appendChild(details);

    // ============ 4. Weather Forecast
    const forecast = document.createElement('div');
    forecast.className = 'weather-forecast';

    weatherData.forecast.forEach(day => {
        const forecastDay = document.createElement('div');
        forecastDay.className = 'forecast-day';

        const dayName = document.createElement('span');
        dayName.className = 'day-name';
        dayName.textContent = day.day;

        const dayIcon = document.createElement('span');
        dayIcon.className = 'day-icon';
        dayIcon.textContent = day.icon;

        const dayTemp = document.createElement('span');
        dayTemp.className = 'day-temp';
        dayTemp.textContent = day.temp;

        forecastDay.appendChild(dayName);
        forecastDay.appendChild(dayIcon);
        forecastDay.appendChild(dayTemp);
        forecast.appendChild(forecastDay);
    });

    container.appendChild(forecast);
}
function showLoading() {
    container.innerHTML = ''
    const loading = document.createElement('div');
    loading.className = 'loading';
    container.appendChild(loading);
}
