import React from 'react'
import CharacterCard from './CharacterCard'

const CharacterList = props => {
  return (
    <div className="characters-list">
      <ul>
        {
          props.characters.map(character => {
            return (
              <CharacterCard
                updateCharacter={props.updateCharacter}
                key={character.name} 
                character={character} />
            )
          })
        }
      </ul>
    </div>
  )
}

export default CharacterList;