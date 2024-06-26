import React from 'react'
import deleteButton from '../../../assets/delete.png'

const DeleteButton = ({handleDelete}) => {
  return (
    <button type='button' onClick={handleDelete}>
      <img src={deleteButton} alt='delete' className='w-[200px] delete-btn' />
    </button>
  )
}

export default DeleteButton
