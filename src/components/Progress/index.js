import React, { useContext } from 'react'
import { Line } from 'rc-progress'

import { taskContext } from '../../context'

import { Container } from './styles'

const Progress = () => {
  const { current, done } = useContext(taskContext)

  const getPercentProgress = () => {
    const amountCurrent = current.length
    const amountDone = done.length
    const total = amountCurrent + amountDone

    return amountDone/total * 100 || 0
  }

  return (
    <Container>
      <div>Done {getPercentProgress().toFixed(0)}%</div>
      <Line
        percent={getPercentProgress()}
        strokeWidth="2"
        strokeColor="#000"
        trailWidth={2}
      />
    </Container>
  )
}

export default Progress
