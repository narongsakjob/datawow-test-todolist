import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
`

export const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  height: 45px;
  width: 100%;
  background-color: #dfe1e6;
`

export const ContainerScroll = styled.div`
  position: absolute;
  left: 0;
  top: 65px;
  height: calc(100% - 245px);
  width: 100%;
  overflow-y: scroll;
  background-color: #dfe1e6;
  border-radius: 3px;
`

export const CreateButtonContainer = styled.div`
  position: absolute;
  bottom: 130px;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: #dfe1e6;
  padding: 10px 0;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

export const CreateButton = styled.a`
  padding: 0 10px;
`

export const UnorderedList = styled.ul`
  margin: 0;
  padding: 0 10px;
`