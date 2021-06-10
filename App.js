import React, {Component} from 'react';
import './App.css';



const PLACES = ["Барселона", "Москва", "Южно-Сахалинск", "Архангельск", "Сочи", "Волгоград", "Санкт-Петербург", "Барнаул", "Чебоксары", "Иркутск", "Мурманск", "Хабаровск", "Владивосток"];

class WeatherBlock extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
   };
  }
  componentDidMount() {
    const name = this.props.name;
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" +
     name +
     "&appid=e1ee9817fb90b4587d025b576e85e05f";
  fetch(URL).then(res => res.json()).then(json => {
     this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Загрузка...</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "https://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <p>Текущая температура: {(weatherData.main.temp - 273.15).toFixed(0)}°С</p>
        <p>Максимальная температура : {(weatherData.main.temp_max - 273.15).toFixed(0)}°С</p>
        <p>Минимальная температура: {(weatherData.main.temp_min - 273.15).toFixed(0)}°С</p>
        <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
        <h1>
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
      </div>
);
  }
}
import React, {Component} from 'react';
import './App.css';



const PLACES = ["Барселона", "Москва", "Южно-Сахалинск", "Архангельск", "Сочи", "Волгоград", "Санкт-Петербург", "Барнаул", "Чебоксары", "Иркутск", "Мурманск", "Хабаровск", "Владивосток"];

class WeatherBlock extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
   };
  }
  componentDidMount() {
    const name = this.props.name;
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" +
     name +
     "&appid=e1ee9817fb90b4587d025b576e85e05f";
  fetch(URL).then(res => res.json()).then(json => {
     this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Загрузка...</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "https://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <p>Текущая температура: {(weatherData.main.temp - 273.15).toFixed(0)}°С</p>
        <p>Максимальная температура : {(weatherData.main.temp_max - 273.15).toFixed(0)}°С</p>
        <p>Минимальная температура: {(weatherData.main.temp_min - 273.15).toFixed(0)}°С</p>
        <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
        <h1>
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
      </div>
);
  }
}


class App extends Component {
    constructor() {
      super();
      this.state = {
        activePlace: 0,
    };
}
render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">       
     
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }} >
              {place}
          </button>
        ))}

        <WeatherBlock
          key={activePlace}
          name={PLACES[activePlace]} />
      </div>
      
    );
  }
}

export default App;

class App extends Component {
    constructor() {
      super();
      this.state = {
        activePlace: 0,
    };
}
render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">       
     
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }} >
              {place}
          </button>
        ))}

        <WeatherBlock
          key={activePlace}
          name={PLACES[activePlace]} />
      </div>
      
    );
  }
}

export default App;
