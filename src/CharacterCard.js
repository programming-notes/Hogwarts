import React, { Component } from 'react'
import CustomImage from './CustomImage'


class CharacterCard extends Component {
  state = {
    editing: false
  }

  handleClick = () => {
    this.setState({ editing: true })
  }

  handleHouseChange = event => {
    console.log('handle house change', event.target.value)
    this.updateCharacterHouseOnTheBackend(event.target.value)
      .then(character => this.props.updateCharacter(character))
    
    this.setState({ editing: false })

  }

  updateCharacterHouseOnTheBackend = house => {
    return fetch(`http://localhost:3001/potter_stuff/${this.props.character.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ house })
    }).then(response => response.json())
  }

  render() {
    return (
      <li className="character-card">
        <h6>{this.props.character.name}</h6>
        {
          this.state.editing ? 
            <form>
              <select onChange={this.handleHouseChange} value={this.props.character.house}>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Hufflepuff">Hufflepuff</option>
              </select>
            </form> : 
            <div onClick={this.handleClick}>
              {this.props.character.house}
            </div>
        }
    
        <CustomImage character={this.props.character} />
      </li>
    )
  }
}

export default CharacterCard;