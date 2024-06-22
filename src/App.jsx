import './App.css'
import CharDetails from './components/charDetails/CharDetails'
import MenuButtonsContainer from './components/menuButtons/MenuButtonsContainer'

function App () {
  return (
    <div className="h-screen bg-red-500">
      <MenuButtonsContainer />
      <CharDetails />
    </div>
  )
}

export default App
