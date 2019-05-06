import React from 'react'

import Progress from '../Progress'
import Toggle from '../Toggle'
import Table from '../Table'

import {
  Container,
  ContainerWrapper,
  ContainerContent,
  Title,
  ContainerHeader
} from './styles'

const Component = () => {
  return (
    <Container>
      <ContainerWrapper>  
        <ContainerContent>
          <ContainerHeader>
            <Title>To Do List</Title>
            <Progress />
            <Toggle />
          </ContainerHeader>
          <Table />
        </ContainerContent>
      </ContainerWrapper>
    </Container>
  )
}

export default Component