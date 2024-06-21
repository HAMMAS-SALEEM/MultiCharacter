import React from 'react'
import deleteButton from '../../assets/delete.png'

const DeleteButton = () => {
  return (
    <button type='button'>
      <img src={deleteButton} alt='delete' className='w-[200px] delete-btn' />
    </button>
  )
}

export default DeleteButton
