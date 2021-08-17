import React,{useState,useEffect} from 'react'
import Navbar from './Components/userComponents/Navbar'

function App() {
  const [userLoggedIn , setUserLoggedIn] = useState(false)

  const userAuth = ()=>{
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
     // userAuth()
    }
  })

  return (
    <div className="container">
      <Navbar userLoggedIn={userLoggedIn} userAuth={userAuth}/>
    </div>
  )
}

export default App
