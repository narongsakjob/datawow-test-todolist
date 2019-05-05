import React, { useContext } from 'react'

import { taskContext } from '../../context'

const Card = () => {
  const { removeTask } = useContext(taskContext)
  return (
    <>
      <div>This is Card</div>
      <button onClick={removeTask}>Remove Task</button>
    </>
  )
}

export default Card
