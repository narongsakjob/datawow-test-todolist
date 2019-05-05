import React, { useContext } from 'react'
import { SortableContainer } from 'react-sortable-hoc'

import Card from '../Card'
import { taskContext } from '../../context'

import {
  Container,
  ContainerScroll,
  UnorderedList,
  CreateButtonContainer,
  CreateButton,
  Title
} from './styles'

const SortableList = SortableContainer(({items}) => {
  return (
    <UnorderedList>
      {items.map((value, index) => (
        <Card key={`current-${index}`} index={index} value={value} />
      ))}
    </UnorderedList>
  );
});

const Table = () => {
  const { current, done, addTask, sortTask, status } = useContext(taskContext)

  return (
    <Container>
      <Title>
        <div style={{ padding: '0 10px' }}>
          { status }
        </div>
      </Title>
      <ContainerScroll>
        <SortableList
          useDragHandle={true}
          items={
            status === 'Current' ?
            current :
            done
          }
          onSortEnd={sortTask}
        />
      </ContainerScroll>
      <CreateButtonContainer onClick={addTask}>
        <CreateButton>
          + Add Card
        </CreateButton>
      </CreateButtonContainer>
    </Container>
  )
}

export default Table