import React from 'react'
import { GlobalState } from './context'
import Container from './components/Container'

const App = () => {
  return (
    <GlobalState>
      <Container />
    </GlobalState>
  )
}

export default App
