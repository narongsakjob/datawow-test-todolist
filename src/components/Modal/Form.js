import React, { useEffect, useState } from 'react'
import {
  ContainerWrapper,
  Container,
  Body,
  Input,
  Button
} from './styles'


const Card = ({ toggle, index=null, value='', type, eventFunc }) => {
  const [input, setInput] = useState(value)

  useEffect(() => {
    document.addEventListener('keydown', keyFunction, false)

    return () => {
      document.removeEventListener('keydown', keyFunction, false)
    }
  });

  const keyFunction = event => {
    if (event.keyCode === 27) {
      toggle()
      event.preventDefault()
    } else if (event.keyCode === 13) {
      confirmEvent()
      event.preventDefault()
    }
  }

  const confirmEvent = () => {
    if (input !== '') {
      eventFunc({ index, input, type })
      toggle()
    } else {
      alert('Field is empty')
    }
  }

  return (
    <ContainerWrapper>
      <Container>
        <Body styles={{ backgroundColor: 'transparent' }} >
          <Input
            autoFocus
            rows="4"
            cols="30"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="What would you like to do?"
          />
          <Button onClick={confirmEvent} type="button">
            Confirm
          </Button>
          <Button onClick={toggle} type="button">
            Cancel
          </Button>
        </Body>
      </Container>
    </ContainerWrapper>
  )
}

export default Card