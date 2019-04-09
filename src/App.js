import React, { Component } from 'react';
import './index.css';
import './App.css';
import CustomImage from './CustomImage'

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
                  <CustomImage character={character} />
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
