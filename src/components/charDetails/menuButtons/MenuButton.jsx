import React from 'react'

const MenuButton = ({ button, active = false, handleMenuButton }) => {
  return (
    <button
      type='button'
      onClick={handleMenuButton}
      className={`${
        active ? 'text-yellow-500' : 'text-white'
      } font-bold text-2xl self-end`}
    >
      {button.button}
    </button>
  )
}

export default MenuButton
