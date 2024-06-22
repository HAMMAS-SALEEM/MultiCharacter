import React, { useState } from 'react'
import person from '../../assets/person.png'

const players = [
  {
    id: 1,
    name: 'Usman Saleem',
    additionalInfo: {
      type: 'Civilian',
      currencyInHand: '1000',
      currencyInBank: '10000000',
      DOB: '2004-02-01'
    }
  },
  {
    id: 2,
    name: 'Steve Smith',
    additionalInfo: {
      type: 'Police',
      currencyInHand: '5000',
      currencyInBank: '9000000',
      DOB: '2002-12-5'
    }
  },
  {
    id: 3,
    name: 'Babar Azam',
    additionalInfo: {
      type: 'Mafia Boss',
      currencyInHand: '50',
      currencyInBank: '99999999990',
      DOB: '1990-01-12'
    }
  }
]

const CharDetails = () => {
  const [counter, setCounter] = useState(0)

  const handleKeyDown = e => {
    if (e.keyCode === 81 && counter !== 0) {
      setCounter(counter - 1)
    } else if (e.keyCode === 69 && counter < players.length - 1) {
      setCounter(counter + 1)
    }
  }

  return (
    <div
      tabIndex='0'
      onKeyDown={handleKeyDown}
      className='outline-0 border-0 flex items-baseline'
    >
      {players
        .filter((p, i) => i === counter)
        .map(player => (
          <div className='p-7' key={player.id}>
            <h1 className='text-7xl font-bold stroke-cyan-700 text-white h1'>
              {player.name.split(' ')[0]}
            </h1>
            <h2 className='text-3xl font-bold stroke-cyan-700 text-white h1'>
              {player.name.split(' ')[1]}
            </h2>
            <ul>{Object.keys(player.additionalInfo).map((p) => (
                <li key={p} className="flex items-center">
                    <img src={person} alt="person" className="w-7" />
                    <span className="text-white font-bold">{player.additionalInfo[p]}</span>
                </li>
            ))}</ul>
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
  )
}

export default CharDetails
