import React, { useContext, useState } from 'react'
import { SortableElement, sortableHandle } from 'react-sortable-hoc'

import { Confirm, Form } from '../Modal'
import { taskContext } from '../../context'
import accept from '../../images/accept.svg'
import reject from '../../images/reject.svg'
import menu from '../../images/menu.svg'
import edit from '../../images/edit.svg'
import trash from '../../images/trash.svg'

import {
  List,
  Menu,
  Item,
  Icon
} from './styles'

const DragHandle = sortableHandle(() => <Menu src={menu} alt='menu' />)

const Card = ({ value, index }) => {
  const { removeTask, moveTask, editTask, status } = useContext(taskContext)
  const [isOpenConfirm, setOpenConfirm] = useState(false)
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [isOpenForm, setOpenForm] = useState(false)

  const toggleModalConfirm = () => {
    setOpenConfirm(!isOpenConfirm)
  }

  const toggleModalForm = () => {
    setOpenForm(!isOpenForm)
  }

  const onClickDelete = () => {
    setTitle(`Do you want to delete this task ?`)
    setType('delete')
    toggleModalConfirm()
  } 

  const onClickMove = () => {
    if (status === 'Current') {
      setTitle(`Do you want to move this task to done ?`)
    } else {
      setTitle(`Do you want to cancel this task from done ?`)
    }
    setType('move')
    toggleModalConfirm()
  }

  return (
    <List>
      <Item column={1} xs={2}><DragHandle /></Item>
      <Item column={8} xs={7}>{value}</Item>
      <Item column={3} align={'flex-end'} xs={3}>
        <Icon src={edit} alt='edit' onClick={toggleModalForm} />
        <Icon src={trash} alt='trash' onClick={onClickDelete} />
        {
          status === 'Current' ?
          <Icon src={accept} alt='accept' onClick={onClickMove} /> :
          <Icon src={reject} alt='reject' onClick={onClickMove} />
        }
      </Item>
      {
        isOpenConfirm ?
        <Confirm
          title={title}
          type={status.toLowerCase()}
          index={index}
          toggle={toggleModalConfirm}
          eventFunc={type === 'move' ? moveTask : removeTask}
        /> : null
      }
      {
        isOpenForm ?
        <Form
          type={status.toLowerCase()}
          index={index}
          value={value}
          toggle={toggleModalForm}
          eventFunc={editTask}
        /> : null
      }
    </List>
  )
}

export default SortableElement(Card)
