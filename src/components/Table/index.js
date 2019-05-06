import React, { useContext, useRef } from 'react'
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
  const containerRef = useRef(null);

  const onClickAddTask = async ()  => {
    await addTask()
    if (containerRef.current.scrollHeight > 440) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight + 50;
    }
  }

  return (
    <Container>
      <Title>
        <div style={{ padding: '0 10px' }}>
          { status }
        </div>
      </Title>
      <ContainerScroll ref={containerRef}>
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
      <CreateButtonContainer
        onClick={onClickAddTask}
        style={status === 'Done' ?
          { pointerEvents: "none", opacity: "0.4" } :
          {}
        }
      >
        <CreateButton>
          + Add Card
        </CreateButton>
      </CreateButtonContainer>
    </Container>
  )
}

export default Table