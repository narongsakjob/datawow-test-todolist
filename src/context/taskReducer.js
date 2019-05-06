import arrayMove from 'array-move'
import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  SORT_TASK,
  MOVE_TASK,
  TOGGLE_STATUS
} from './actions'

const addTask = (state, { input }) => {
  let tempCurrent = state.current
  tempCurrent.push(input)
  return { ...state, current: tempCurrent }
}

const removeTask = (state, { type, index }) => {
  let temp = state[type]
  temp.splice(index, 1)
  return { ...state, [type]: temp }
}

const moveTask = (state, { type, index }) => {
  let tempCurrent = state.current
  let tempDone = state.done
  if (type === 'done') {
    tempCurrent.push(state.done[index])
    tempDone.splice(index, 1)
  } else {
    tempDone.push(state.current[index])
    tempCurrent.splice(index, 1)
  }
  return { ...state, current: tempCurrent, done: tempDone }
}

const sortTask = (state, {oldIndex, newIndex}) => {
  const tempCurrent = arrayMove(state.current, oldIndex, newIndex)
  return { ...state, current: tempCurrent }
}

const toggleStatus = (state) => {
  const status = state.status === 'Current' ? 'Done' : 'Current'
  return { ...state, status }
}

const editTask = (state, { index, input, type }) => {
  let temp = state[type]
  temp[index] = input
  return { ...state, [type]: temp }
}

export const taskReducer = (state, { type, payload }) => {
  switch(type) {
    case ADD_TASK:
      return addTask(state, payload)
    case REMOVE_TASK:
      return removeTask(state, payload)
    case SORT_TASK:
      return sortTask(state, payload)
    case TOGGLE_STATUS:
      return toggleStatus(state)
    case MOVE_TASK:
      return moveTask(state, payload)
    case EDIT_TASK:
      return editTask(state, payload)
    default:
      return state
  }
}