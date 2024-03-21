
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Componet/Login'
import Profile from './Componet/Profile'

function App() {


  return (
    <>
    <UserContextProvider>
    <h1>Stacklab aur Context Api</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
