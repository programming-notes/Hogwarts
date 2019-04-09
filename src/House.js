import React from 'react'

const House = props => {
  return (
    <div className="house-students">
      <h3>{props.house}</h3>
      {
        props.characters.filter(character => character.house === props.house)
                        .map(character => <p key={character.id}>{character.name}</p>)
      }
    </div>
  )
  
}

export default House;