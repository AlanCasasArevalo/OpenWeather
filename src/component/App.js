import React, {Component} from 'react';
import Header from "./Header";
import Form from "./Form";
import CustomError from "./CustomError";

class App extends Component {
    state = {
        error: ''
    };

    componentDidMount() {
        this.setState({
            error: false
        })
    }

    weatherSearched = response => {
        if (response) {
            this.setState({
                error: false
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
