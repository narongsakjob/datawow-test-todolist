import React, { useContext } from 'react'

import { taskContext } from '../../context'
import { SortableElement, sortableHandle } from 'react-sortable-hoc'

const DragHandle = sortableHandle(() => <span>::</span>)

const Card = ({ value, index }) => {
  const { removeTask } = useContext(taskContext)
  return (
    <li>
      <DragHandle />
      {value}
      <button onClick={() => removeTask(index)}>Remove Task</button>
    </li>
  )
}

export default SortableElement(Card)
