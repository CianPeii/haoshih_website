import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherIcon = (weatherDescription) => {
    if (weatherDescription.includes("晴")) {
        return "../images/icon/sunny.svg";
    } else if (weatherDescription.includes("多雲")) {
        return "../images/icon/cloudy.svg";
    } else if (weatherDescription.includes("陰")) {
        return "../images/icon/cloud.svg";
    } else if (weatherDescription.includes("雨")) {
        return "../images/icon/rainy.svg";
    } else if (weatherDescription.includes("雷")) {
        return "../images/icon/lightning.svg";
    }else if (weatherDescription.includes("霧")) {
        return "../images/icon/fog.svg";
    }else {
        return "../images/icon/warning.svg"; // 找不到匹配時的預設圖片
    }
};


  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWA-5BBE0E82-87F0-4AE9-8EDE-43EBA36F7FBD&format=JSON&StationName=%E8%87%BA%E4%B8%AD');
        setWeatherData(response.data.records.Station[0]);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return <div className="loading">Loading...</div>;
  }

  const { StationName, WeatherElement, ObsTime } = weatherData;

  return (
    <div className="weather-card">
      <h2 className="city-name">{StationName}市 <span>{WeatherElement.Weather}</span></h2>
      <p className="observation-time">{new Date(ObsTime.DateTime).toLocaleString()}</p>
      <div className="weather-info">
        <div className="temperature-container">
          <p className="temperature">{Math.round(WeatherElement.AirTemperature)}<span>°C</span></p>
          <img className="weather-icon" src={getWeatherIcon(WeatherElement.Weather)} alt="" />
        </div>
        <div className="wind-speed">
          <img src="../images/icon/wind_speed.svg" alt="" />
          <p>{WeatherElement.WindSpeed} m/s</p>
        </div>
        <div className="wind-speed">
          <img src="../images/icon/UV.svg" alt="" />
          <p>紫外線指數：{WeatherElement.UVIndex}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;