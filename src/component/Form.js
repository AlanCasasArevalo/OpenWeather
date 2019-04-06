import React, {Component} from 'react'

class Form extends Component{

    // crear refs
    cityRef = React.createRef();
    countryRef = React.createRef();

    searchWeather = (e) => {
        e.preventDefault();

    //    leer refs
        const citySearched = this.cityRef.current.value;
        const countrySearched = this.countryRef.current.value;

        if (citySearched && typeof citySearched !== 'undefined' && countrySearched && typeof countrySearched !== 'undefined'){
        //    crear el objeto
            const weatherResponse = {
                citySearched,
                countrySearched
            }
        //    enviarlo a app
            this.props.weatherSearched(weatherResponse)

        } else {
            this.props.weatherSearched(null)
        }


    //    reset form
        e.currentTarget.reset();
    };

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.searchWeather}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="ciudad" type="text" ref={this.cityRef}/>
                                <label htmlFor="ciudad"> Ciudad: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.countryRef}>
                                    <option value="" defaultValue> Elige un pais </option>
                                    <option value="AR">Argentina</option>
                                    <option value="ES">España</option>
                                    <option value="UK">Reino Unido</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="US">EEUU</option>
                                    <option value="MX">Mexico</option>
                                    <option value="PE">Peru</option>
                                </select>
                                <label htmlFor="pais"> Pais: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar ...."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
