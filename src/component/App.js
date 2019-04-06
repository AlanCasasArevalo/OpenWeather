import React, {Component} from 'react';
import Header from "./Header";
import Form from "./Form";
import CustomError from "./CustomError";
import Weather from "./Weather";

class App extends Component {
    state = {
        error: false,
        weather: {},
        weatherResult: {}
    };

    componentDidMount() {
        this.setState({
            error: false
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.weather === this.state.weather){

        } else {
            this.getCityFromOpenWeather();
        }
    }

    getCityFromOpenWeather = () =>{
        const { citySearched, countrySearched } = this.state.weather;
        if (!citySearched || !countrySearched) return null;
        const apiKey = "099dffafea76d8daba237d2baeb65201";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearched + `,` + countrySearched}&appid=${apiKey}`

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(dataFromResponse => {
                this.setState({
                    weatherResult : dataFromResponse
                })
            })
            .catch( error => {
                console.log("", error);
            })
    };

    weatherSearched = response => {
        if (response) {
            this.setState({
                error: false,
                weather: response
            })
        } else {
            this.setState({
                error: true
            })
        }
    };

    render() {

        const error = this.state.error;
        let result = '';
        if (error) {
            result = <CustomError
                message={'Todos los campos son obligatorios'}
            />
        } else {
            result = <Weather
                weather={this.state.weatherResult}
            />
        }

        return (
            <div className="App">
                <Header
                    title="Weather"
                />
                <Form
                    weatherSearched={this.weatherSearched}
                />
                {result}
            </div>
        );
    }
}

export default App;
