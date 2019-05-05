import React, { useState, useContext } from 'react'
import Switch from "react-switch"

import { Container, Title } from './styles'
import { taskContext } from '../../context'

const Toggle = () => {

  const [checked, handleChange] = useState(false)
  const { toggleStatus, status } = useContext(taskContext)

  const handleToggle = () => {
    handleChange(!checked)
    toggleStatus()
  }

  return (
    <Container>
      <Title>{status}</Title>
      <Switch
        onChange={handleToggle}
        checked={checked}
        onColor="#888888"
        onHandleColor="#000"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
    </Container>
  )
}

export default Toggle