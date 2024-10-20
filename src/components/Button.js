import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='m-2 px-2 py-1 bg-gray-300 rounded-md'>{name}</button>
    </div>
  )
}

export default Button
