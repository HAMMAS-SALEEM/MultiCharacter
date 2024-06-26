import React, { useEffect, useRef, useState } from 'react'
import ReactFocusLock from 'react-focus-lock'
import { formatNumberToCurrency } from '../../utils/formatNumbersToCurrency'
import menuButtons from './menuButtons/buttons'
import MenuButton from './menuButtons/MenuButton'
import DeleteButton from './menuButtons/DeleteButton'
import { players } from './data/players'
import { icons } from './data/icons'

const CharDetails = () => {
  const [counter, setCounter] = useState(0)
  const [buttonNumber, setButtonNumber] = useState(0)

  const handleMenuButton = () => {
    handleRef()
    console.log('Button Pressed')
  }

  const handleKeyDown = e => {
    if ([81, 113].includes(e.keyCode) && counter !== 0) {
      setCounter(counter - 1)
    } else if ([69, 101].includes(e.keyCode) && counter < players.length - 1) {
      setCounter(counter + 1)
    } else if (e.keyCode === 39 && buttonNumber < menuButtons.length - 1) {
      setButtonNumber(buttonNumber + 1)
    } else if (e.keyCode === 37 && buttonNumber !== 0) {
      setButtonNumber(buttonNumber - 1)
    } else if (e.keyCode === 17) {
      handleMenuButton()
    }
  }

  const handleMouseMove = e => {
    ref.current.focus()
  }

  const ref = useRef()

  const handleRef = () => {
    ref.current.focus()
  }

  useEffect(() => {
    handleRef()
  })

  return (
    // <ReactFocusLock>
    <>
      <div
        tabIndex='0'
        onKeyDown={handleKeyDown}
        onMouseMove={handleMouseMove}
        onClick={handleRef}
        ref={ref}
        className='outline-0 border-0 flex items-baseline'
      >
        {players
          .filter((p, i) => i === counter)
          .map(player => (
            <div className='p-7 min-w-[300px]' key={player.id}>
              <h1 className='text-7xl font-bold stroke-cyan-700 text-white h1'>
                {player.name.split(' ')[0]}
              </h1>
              <h2 className='text-3xl font-bold stroke-cyan-700 text-white h1'>
                {player.name.split(' ')[1]}
              </h2>
              <ul className='flex flex-col gap-1 mt-3'>
                {Object.keys(player.additionalInfo).map((p, i) => (
                  <li key={p} className='flex items-center gap-2'>
                    <img src={icons[i].icon} alt='person' className='w-7' />
                    <span className='text-white font-bold'>
                      {formatNumberToCurrency(player.additionalInfo[p])}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <div className='flex gap-4 relative bottom-3'>
          <button
            type='button'
            onClick={() => counter !== 0 && setCounter(counter - 1)}
            className='bg-black text-white w-[40px] h-[40px] rounded-[50%] font-bold'
          >
            Q
          </button>
          <button
            type='button'
            onClick={() =>
              counter < players.length - 1 && setCounter(counter + 1)
            }
            className='bg-black text-white w-[40px] h-[40px] rounded-[50%] font-bold'
          >
            E
          </button>
        </div>
      </div>
      <div className='absolute bottom-0 right-0 left-0 p-[30px] flex justify-between menu-btns-container'>
        <div className='flex justify-around w-[50%]'>
          {menuButtons.map((button, index) => (
            <MenuButton
              key={button.id}
              button={button}
              active={index === buttonNumber ? true : false}
              handleMenuButton={handleMenuButton}
            />
          ))}
        </div>
        <DeleteButton handleDelete={handleMenuButton} />
      </div>
    </>
    // </ReactFocusLock>
  )
}

export default CharDetails
