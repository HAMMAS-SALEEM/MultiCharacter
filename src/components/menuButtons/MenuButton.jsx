import React from 'react'

const MenuButton = ({ button }) => {
  return (
    <button type='button' className='text-white font-bold text-2xl self-end'>
      {button.button}
    </button>
  )
}

export default MenuButton
