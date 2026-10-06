import Header from './components/header.tsx'
import Grass from './components/grass.tsx'
import React from 'react'
import Title from './components/title.tsx'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', minHeight: '100vh' }}>
          <Title />
          <Grass />
        </div>
      </div>
    </>
  )
}

export default App
