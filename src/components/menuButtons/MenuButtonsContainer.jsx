import React from 'react'
import menuButtons from './buttons'
import MenuButton from './MenuButton'
import DeleteButton from './DeleteButton'

const MenuButtonsContainer = () => {
  return (
    <div className='absolute bottom-0 right-0 left-0 p-[30px] flex justify-between menu-btns-container'>
      <div className='flex justify-around w-[50%]'>
        {menuButtons.map(button => (
          <MenuButton key={button.id} button={button} />
        ))}
      </div>
      <DeleteButton />
    </div>
  )
}

export default MenuButtonsContainer
