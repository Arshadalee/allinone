import React from 'react'
import useLocalStorage from './useLocalStorage';
import  "./Style.css";


function DarkMod() {

    const[theme,setTheme]=useLocalStorage('theme','dark')

    function handleTheme(){
        setTheme(theme==='light'?'dark':'light')
    }
    console.log(theme,"this is the theme testing")
  return (
   <div className='light-dark-mode' data-theme={theme}>
    <center> <div className="container">
    <p>{theme} Mode</p>
    <button onClick={handleTheme} >Change Theme</button>
      
    </div></center>
   </div>
  )
}

export default DarkMod
