import React, { useContext } from 'react'
import { SortableContainer } from 'react-sortable-hoc'

import Card from '../Card'
import { taskContext } from '../../context'

import { Container, ContainerScroll } from './styles'

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <Card key={`current-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

const Table = () => {
  const { current, addTask, sortTask } = useContext(taskContext)

  return (
    <Container>
      <ContainerScroll>
      <button onClick={addTask}>Add Card</button>
        <SortableList useDragHandle={true} items={current} onSortEnd={sortTask} />
      </ContainerScroll>
    </Container>
  )
}

export default Table