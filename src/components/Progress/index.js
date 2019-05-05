import React, { useContext } from 'react'

import { taskContext } from '../../context'

const Progress = () => {
  const { progress } = useContext(taskContext)

  return (
    <div>Progress {progress}</div>
  )
}

export default Progress
