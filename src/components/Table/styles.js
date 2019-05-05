import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
`

export const ContainerScroll = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: calc(100% - 100px);
  width: 100%;
  overflow-y: scroll;
`