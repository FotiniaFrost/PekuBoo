import React from 'react'

function Button(props) {
  return (
    <button className={props.circle ? 'button__circle' : 'button'}>{props.children}</button>
  )
}

export default Button