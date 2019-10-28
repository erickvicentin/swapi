import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
        super (props)

        this.state = {
            personajes: [],
            isFetch:true,
        }
    }

    componentDidMount () {
        fetch('https://swapi.co/api/people')
        .then(response => response.json())
        .then(persJson => this.setState({personajes: persJson.results, isFetch: false}))
    }

    render() {
      const personajes = this.state.personajes.map((todo,i) => {
        return (
          <div className= "col-md-4">
              <div className= "card mt-4">
                <div className= "card-header">
                  <h2>Nombre: {todo.name}</h2>
                  <span className= "badge badge-pill badge-danger ml-2"> 
                  Birth year: {todo.birth_year}
                  </span>
                </div>
                <div className= "card-body">
                  <p>Genero: {todo.gender}</p>
                </div>
              </div>
          </div>
        )
      })
      
      return (
    
        <div className="App"> 
          <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
              Personajes de Star Wars
              <span className="badge badge-pill badge-light ml-2">
                Cantidad de personajes: {this.state.personajes.length}
              </span>
            </a>
          </nav>
          
          <div className="container">
            <div className="row mt-4">
              {personajes}
            </div>
          </div>

        </div>
      );
    }
  }
  
  export default App;