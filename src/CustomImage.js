import React from 'react'

export default ({character}) => (
  <div className="img-container">
    <div className={`overlay ${character.house} scaler`}></div>
    <img src={character.image1} alt={character.name} />
  </div>
)