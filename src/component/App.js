import React, {Component} from 'react';
import Header from "./Header";
import Form from "./Form";
import CustomError from "./CustomError";

class App extends Component {
    state = {
        error: '',
        weather: {}
    };

    componentDidMount() {
        this.setState({
            error: false
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.getWeatherFromCity();
    }

    getWeatherFromCity = () =>{
        const { citySearched, countrySearched } = this.state.weather;
        const apiKey = "099dffafea76d8daba237d2baeb65201";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearched + `,` + countrySearched}&appid=${apiKey}`

        console.log("URL A ATACAR", url);
    }

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
