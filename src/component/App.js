import React, {Component} from 'react';
import Header from "./Header";
import Form from "./Form";

class App extends Component {
    state = {
        error: ''
    }

    componentDidMount() {
        this.setState({
            error: false
        })
    }

    weatherSearched = response => {
        if (response) {
        } else {
            this.setState({
                error: true
            })
        }
    };

    render() {
        return (
            <div className="App">
                <Header
                    title="Weather"
                />
                <Form
                    weatherSearched={this.weatherSearched}
                />
            </div>
        );
    }
}

export default App;
