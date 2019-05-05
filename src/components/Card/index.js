import React, { useContext } from 'react'
import { SortableElement, sortableHandle } from 'react-sortable-hoc'

import { taskContext } from '../../context'
import menu from '../../images/menu.svg'

import { List } from './styles'

const DragHandle = sortableHandle(() => <img src={menu} alt="menu" />)

const Card = ({ value, index }) => {
  const { removeTask } = useContext(taskContext)
  return (
    <List>
      <DragHandle />
      {value}
      <button onClick={() => removeTask(index)}>Remove Task</button>
    </List>
  )
}

export default SortableElement(Card)
