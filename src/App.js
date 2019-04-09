import React, { Component } from 'react';
import './App.css';
import CharactersList from './CharactersList';
import House from './House';

class App extends Component {
  state = {
    characters: [],
    searchTerm: ''
  }


  componentDidMount() {
    fetch('http://localhost:3001/potter_stuff')
      .then(response => response.json())
      .then(characters => {
        this.setState({ characters })
      })
  }

  updateCharacter = updatedCharacter => {
    const updatedCharacters = this.state.characters.map(character =>
      character.id === updatedCharacter.id ? updatedCharacter : character
    )
    this.setState({
      characters: updatedCharacters
    })
  }

  handleSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }


  render() {
    // console.log(this.state, "App")
    const houses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw'];
    return (
      <div className="App">
        <input 
          placeholder="search characters" 
          value={this.state.searchTerm} 
          onChange={this.handleSearchTerm}
        />
        <CharactersList 
          updateCharacter={this.updateCharacter} 
          characters={this.state.characters.filter(character => (
            character.name.includes(this.state.searchTerm) || character.house.includes(this.state.searchTerm)
          ))}
        />
        <hr />
        {
          houses.map((house, idx) =>
            <House key={idx} house={house} characters={this.state.characters} />
          )
        }
      </div>
    );
  }
}

export default App;
