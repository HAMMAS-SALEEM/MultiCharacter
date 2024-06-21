import React from 'react'

const MenuButton = ({ button }) => {
  return (
    <button type='button' className='text-white font-bold text-2xl'>
      {button.button}
    </button>
  )
}

export default MenuButton
