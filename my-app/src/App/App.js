import axios from 'axios';
import React from 'react';
import './App.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        //Параметры для первого рендера
        this.state = {
            dataType: {
                type: 'people', 
                counter: 1
            },
            headers: {
                headerOne: 'Gender',
                headerTwo: 'Height',
                headerThree: 'Mass'
            },
            data: {}
        }
        //Привязка к кнопкам навигации
        this.setPeople = this.setPeople.bind(this);
        this.setPlanets = this.setPlanets.bind(this);
        this.setStarships = this.setStarships.bind(this);
        this.changeCounter = this.changeCounter.bind(this);
    }
    //Параметры для вывода People
    setPeople() {
        this.setState((state) => {
            return { dataType: {
                type: 'people',
                counter: 1
                },
                headers: {
                    headerOne: 'Gender',
                    headerTwo: 'Height',
                    headerThree: 'Mass'
                }
            }
        })
    }
    //Параметры для вывода Planets
    setPlanets() {
        this.setState((state) => {
            
            return { dataType: {
                type: 'planets',
                counter: 5
                },
                headers: {
                    headerOne: 'Diameter',
                    headerTwo: 'Population',
                    headerThree: 'Orbital-period'
                }
            }
        })
    }
    //Параметры для вывода Starships
    setStarships() {
        this.setState((state) => {
            
            return { dataType: {
                type: 'starships',
                counter: 3
                },
                headers: {
                    headerOne: 'Length',
                    headerTwo: 'Passengers',
                    headerThree: 'Starship_class'
                }
            }
        })
    }
    //Показ информации с API ресурса
    componentDidMount(){
    axios
        .get(`https://swapi.dev/api/${this.state.dataType.type}/${this.state.dataType.counter}`)
        .then(res => {
            this.setState((state) => { return { 
                data: {
                    imgLink: `https://starwars-visualguide.com/assets/img/characters/${this.state.dataType.counter}.jpg`,
                    name: res.data.name,
                    infoOne: res.data.gender,
                    infoTwo: res.data.height, 
                    infoThree: res.data.mass
                }
            }})
        }); 
    }

    componentDidUpdate(prevProps, prevState) {
        //Проверка на пренадлежность одной из компонентов и апдейт его
        if (prevState.dataType.type !== this.state.dataType.type || prevState.dataType.counter !== this.state.dataType.counter) {
            axios
                .get(`https://swapi.dev/api/${this.state.dataType.type}/${this.state.dataType.counter}`)
                .then(res => {
                    this.setState((state) => {
                        console.log(res.data);
                        if (res.data.gender) {
                            return {
                                data: {
                                    imgLink: `https://starwars-visualguide.com/assets/img/characters/${this.state.dataType.counter}.jpg`,
                                    name: res.data.name,
                                    infoOne: res.data.gender,
                                    infoTwo: res.data.height,
                                    infoThree: res.data.mass
                                }
                            }
                        }
                        else if (res.data.diameter) {
                            return {
                                data: {
                                    imgLink: `https://starwars-visualguide.com/assets/img/planets/${this.state.dataType.counter}.jpg`,
                                    name: res.data.name,
                                    infoOne: res.data.diameter,
                                    infoTwo: res.data.population,
                                    infoThree: res.data.orbital_period
                                }
                            }
                        } else {
                            return {
                                data: {
                                    imgLink: `https://starwars-visualguide.com/assets/img/starships/${this.state.dataType.counter}.jpg`,
                                    name: res.data.name,
                                    infoOne: res.data.length,
                                    infoTwo: res.data.passengers,
                                    infoThree: res.data.starship_class
                                }
                            }
                        }
                    })
                });
        }
    }

    changeCounter() {
        this.setState((state) => {
            
            return { dataType: {
                type: this.state.dataType.type,
                counter: this.state.dataType.counter + 1
                }
            }
        })
    }

    render() {
        return (
            <div className="centre">
                <div>
                    <button onClick={this.setPeople}>People</button>
                    <button onClick={this.setPlanets}>Planets</button>
                    <button onClick={this.setStarships}>Starships</button>
                </div>
                <button onClick={this.changeCounter}>NEXT</button>
                <div>
                    <img className="min_img" src={this.state.data.imgLink} alt={this.state.data.name} />
                    <h3>{this.state.data.name}</h3>
                </div>
                <div>
                    <ul>
                        <li key='header-1'>{this.state.headers.headerOne}: {this.state.data.infoOne}</li>
                        <li key='header-2'>{this.state.headers.headerTwo}: {this.state.data.infoTwo}</li>
                        <li key='header-3'>{this.state.headers.headerThree}: {this.state.data.infoThree}</li>
                    </ul>
                </div>
            </div>
        )
    };
}