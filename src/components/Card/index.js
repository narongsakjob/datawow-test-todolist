import React, { useContext } from 'react'
import { SortableElement, sortableHandle } from 'react-sortable-hoc'

import { taskContext } from '../../context'
import menu from '../../images/menu.svg'
import edit from '../../images/edit.svg'
import trash from '../../images/trash.svg'

import {
  List,
  Menu,
  Item,
  FinishButton,
  Icon
} from './styles'

const DragHandle = sortableHandle(() => <Menu src={menu} alt='menu' />)

const Card = ({ value, index }) => {
  const { removeTask } = useContext(taskContext)
  return (
    <List>
      <Item column={1}><DragHandle /></Item>
      <Item column={8}>{value}</Item>
      <Item column={3} align={'flex-end'}>
        <Icon src={edit} alt='edit' />
        <Icon src={trash} alt='trash' onClick={() => removeTask(index)} />
        <FinishButton onClick={() => console.log('Finish')}>Finish</FinishButton>
      </Item>
    </List>
  )
}

export default SortableElement(Card)
