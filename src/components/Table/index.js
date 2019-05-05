import React, { useContext } from 'react'

import Card from '../Card'
import { taskContext } from '../../context'

const Table = () => {
  const { current, addTask } = useContext(taskContext)

  return (
    <>
      <div>This is Table</div>
      <button onClick={addTask}>Add Card</button>
      {
        current.map((task, index) => 
          <Card key={`current-${index}`}>{task}</Card>
        )
      }
    </>
  )
}

export default Table