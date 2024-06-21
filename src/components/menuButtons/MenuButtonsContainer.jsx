import React from 'react'
import deleteButton from '../../assets/delete.png'
import menuButtons from './buttons'

const MenuButtonsContainer = () => {
  return (
    <div className='absolute bottom-0 right-0 left-0 p-[30px] flex justify-between menu-btns-container'>
      <div className='flex justify-around w-[50%]'>
        {menuButtons.map(button => {
          return (
            <button
              type='button'
              className='text-white font-bold text-2xl'
              key={button.id}
            >
              {button.button}
            </button>
          )
        })}
      </div>
      <button type='button'>
        <img src={deleteButton} alt='delete' className='w-[200px] delete-btn' />
      </button>
    </div>
  )
}

export default MenuButtonsContainer
