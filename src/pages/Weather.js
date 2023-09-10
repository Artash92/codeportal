import React , {useState, useEffect} from 'react';
import axios from 'axios';
  

const API_KEY = '9f04332faa794991931193201232203';

function Weather() {
    
    const [city, setCity] = useState('Erevan');
    const [weather, setWeather] = useState(null);
    
  
    useEffect(() => {
      document.title = `Եղանակի Տեսություն | Погода | Weather `;
      async function fetchWeather() {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
        const data = response.data.current;
        setWeather(data);
      }
  
      fetchWeather();
    }, [city]);
  
    const handleCityChange = (event) => {
      setCity(event.target.value);
    }
  
    if (!weather) {
      return <div class="lds-hourglass"></div>;
    }
  
    const weatherIcon = weather.condition.icon;
    let icon;
  
    if (weatherIcon.includes('sun')) {
      icon = '☀️';
    } else if (weatherIcon.includes('rain')) {
      icon = '🌧️';
    } else if (weatherIcon.includes('cloud')) {
      icon = '☁️';
    } else {
      icon = '🌤️';
    }
  
    return (
      <div className='container0'>
      <div className="container9">
        <div className="left1">
          <div className="temp">{weather.temp_c}°C {icon}</div>
          <div>
            <div className="text1">{weather.condition.text}</div>
          </div>
        </div>
        <div className="right1">
        <div>Տեղումների հավանականությունը՝ {weather.precip_mm} մմ</div>
        <div>Խոնավություն՝ {weather.humidity}%</div>
        <div>Քամի՝{weather.wind_kph} կմ/ժ</div>
        </div>
        <div className="input-container1">
          <p> գրեք ձեր քաղաքը</p>
          <input className="input1" type="text" value={city} onChange={handleCityChange} />
        </div>
      </div>
      <p className='p1'>Хотите знать, какая погода в вашем городе прямо сейчас? Введите название своего города   и получите актуальную информацию о температуре, влажности и скорости ветра.</p>
      
      <p className='p1'>Would you like to know the weather in your city right now? Enter the name of your city and get up-to-date information on temperature, humidity, and wind speed.</p>
      
      <h6>Get accurate and up-to-date weather information for your city with our weather API from WeatherAPI.com. Enter the name of your city and get instant information on temperature, humidity, and wind speed</h6>

      </div>
    );
}  

export default Weather;