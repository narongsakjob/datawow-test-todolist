import React from 'react'
import styled from 'styled-components'

export const List = styled.li`
  list-style: none;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  border-radius: 3px;
  border: 1px solid #dfe1e6;
  padding: 5px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
`

export const Menu = styled.img`
  cursor: ns-resize;
`

const ItemContainer = styled.div`
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-all;
  align-items: center;
  display: flex;
  padding: 0 10px;
`

export const Item = ({ children, column, align='flex-start' }) => (
  <ItemContainer style= {{ flex: `0 0 ${column/12 * 100}%`, maxWidth: `${column/12*100}%`, justifyContent: align }}>
    {children}
  </ItemContainer>
)

export const Icon = styled.img`
  margin-right: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(0.8);
    cursor: pointer;
  }
`

export const DoneButton = styled.button`
  background-color: #000;
  color: #fff;
  border-radius: 6px;
  padding: 8px;
  border: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(0.8);
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`