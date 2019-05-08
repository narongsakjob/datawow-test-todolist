import React, { useEffect } from 'react'
import {
  ContainerWrapper,
  Container,
  Body,
  Title,
  Button,
} from './styles'

const Confirm = ({ title='Confirm ?', toggle, index, eventFunc, type }) => {
  useEffect(() => {
    document.addEventListener('keydown', keyFunction, false)

    return () => {
      document.removeEventListener('keydown', keyFunction, false)
    }
  });

  const keyFunction = event => {
    if (event.keyCode === 27) {
      toggle()
    } else if (event.keyCode === 13) {
      toggle()
      eventFunc({ index, type })
    }

    event.preventDefault()
  }

  const onClickConfirm = () => {
    eventFunc({ index, type })
    toggle()
  }

  return (
    <ContainerWrapper>
      <Container>
        <Body>
          <Title>{title}</Title>
          <Button onClick={onClickConfirm} type="button">
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

export default Confirm
