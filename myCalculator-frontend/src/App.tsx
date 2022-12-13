import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import Calculator from './components/calculator'

class App extends React.Component{
  render(){
    return(
      <div>
        <Calculator/>
      </div>
    )
  }
}
export default App
