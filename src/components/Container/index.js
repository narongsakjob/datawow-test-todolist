import React from 'react'

import Progress from '../Progress'
import Toggle from '../Toggle'
import Table from '../Table'

import { Container, ContainerWrapper, ContainerContent, Title } from './styles'

const Component = () => {
  return (
    <Container>
      <ContainerWrapper>  
        <ContainerContent>
          <Title>To Do List</Title>
          <Progress />
          <Toggle />
          <Table />
        </ContainerContent>
      </ContainerWrapper>
    </Container>
  )
}

export default Component