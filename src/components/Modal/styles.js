import React from 'react'
import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.4);
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const BodyContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  text-align: center;
  border-radius: 5px;
  z-index: 3;
  padding: 16px;
`

export const Body = ({
  children,
  width='400px',
  height='200px',
  styles={
    backgroundColor: '#fff',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.9)'
  }
}) => (
  <BodyContainer style={{
    width,
    height,
    ...styles,
  }}>
    {children}
  </BodyContainer>
)

export const Title = styled.h1`
  color: #000;
  font-weight: 100;
`

export const Button = styled.button`
  outline: none;
  transition: background-color 0.2s;
  background-color: #000;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #8a8a8a;
  user-select: none;
  display: inline-block;
  margin: 0 10px;
  &:hover {
    opacity: 0.7;
  }
`

export const Input = styled.textarea`
  display: block;
  margin: 20px auto;
  border-width: 0 0 4px 0;
  color: #8a8a8a;
  font-size: 18px;
  resize: none;
  padding: 3px 15px;
  &:focus {
    outline: none;
  }
`