import React, { useContext, useState } from 'react'
import { SortableElement, sortableHandle } from 'react-sortable-hoc'

import { Confirm } from '../Modal'
import { taskContext } from '../../context'
import menu from '../../images/menu.svg'
import edit from '../../images/edit.svg'
import trash from '../../images/trash.svg'

import {
  List,
  Menu,
  Item,
  DoneButton,
  Icon
} from './styles'

const DragHandle = sortableHandle(() => <Menu src={menu} alt='menu' />)

const Card = ({ value, index }) => {
  const { removeTask, moveTask, status } = useContext(taskContext)
  const [isOpenConfirm, setOpenConfirm] = useState(false)
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')

  const toggleModal = () => {
    setOpenConfirm(!isOpenConfirm)
  }

  const onClickDelete = () => {
    setTitle(`Do you want to delete this task ?`)
    setType('delete')
    toggleModal()
  } 

  const onClickDone = () => {
    if (status === 'Current') {
      setTitle(`Do you want to move this task to done ?`)
    } else {
      setTitle(`Do you want to cancel this task from done ?`)
    }
    setType('done')
    toggleModal()
  }

  return (
    <List>
      <Item column={1}><DragHandle /></Item>
      <Item column={8}>{value}</Item>
      <Item column={3} align={'flex-end'}>
        <Icon src={edit} alt='edit' />
        <Icon src={trash} alt='trash' onClick={onClickDelete} />
        <DoneButton onClick={onClickDone}>{status === 'Current' ? 'Done' : 'Cancel'}</DoneButton>
      </Item>
      {
        isOpenConfirm ?
        <Confirm
          title={title}
          type={status.toLowerCase()}
          index={index}
          toggle={toggleModal}
          eventFunc={type === 'done' ? moveTask : removeTask}
        /> : null
      }
    </List>
  )
}

export default SortableElement(Card)
