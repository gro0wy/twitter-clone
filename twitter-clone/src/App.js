import React from 'react'
import Sidebar from './layout/Sidebar'
import Widgets from './layout/Widgets'
import Container from './layout/Container'
import Content from './layout/Content'

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  )
}

export default App
