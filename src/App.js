import React, { Component } from 'react';
import './index.css';
import './App.css';

class App extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/potter_stuff')
      .then(response => response.json())
      .then(characters => {
        this.setState({characters})
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="characters-list">
          <ul>
            {
              this.state.characters.map(character =>
                <li className="character-card" key={character.name}>
                  <h6>{character.name}</h6>
                  <div className="img-container">
                    <div className={`overlay ${character.house}`}></div>
                    <img src={character.image1} alt={character.name} />
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
