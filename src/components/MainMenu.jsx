import React from 'react'

function MainMenu({items}) {
  return (
  
        <ul className='mainMenu'>
         { items.map((name, index) => (
            <li key={`${index}_${name}`}>
                <a href="http://#">{name}</a> 
            </li>
         )) }
        </ul>
 
  )
}

export default MainMenu