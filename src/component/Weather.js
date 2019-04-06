import React, {Component} from 'react'
import PropTypes from "prop-types";

class Weather extends Component{

    showResults = () => {
        const weather = this.props.weather;
        if (weather.name && typeof weather.name !== 'undefined') {
            const kelvin = 273.15;
            let weatherIcon = "";
            if (weather.weather[0].icon && typeof weather.weather[0].icon !== 'undefined'){
                weatherIcon = weather.weather[0].icon
            } else {
                weatherIcon = "01d"
            }
            let iconURL = `https://openweathermap.org/img/w/${weatherIcon}.png`;
            const alt = `clima de ${weather.name}`
            return (
                <div className="row">
                    <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                        <div className="card-panel light-blue align-center">
                            <span className="white-text">
                                <h2> { weather.name } </h2>
                                <p 
                                    className="temperatura"> La temperatura actual es: { (weather.main.temp - kelvin).toFixed(2) } &deg;C 
                                    <img src={iconURL} alt={alt}/>
                                </p>
                                <p className="temperatura"> La temperatura minima esperada: { (weather.main.temp_min - kelvin).toFixed(2) } &deg;C </p>
                                <p className="temperatura"> La temperatura maxima esperada: { (weather.main.temp_max - kelvin).toFixed(2) } &deg;C </p>
                            </span>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {

        return (
            <div className="container">
                {this.showResults()}
            </div>
        );
    }
}

Weather.propTypes = {
    weather: PropTypes.object.isRequired
};
export default Weather;
