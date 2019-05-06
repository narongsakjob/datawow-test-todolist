import arrayMove from 'array-move'

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

export const taskReducer = (state, { type, payload }) => {
  switch(type) {
    case 'addTask':
      return addTask(state, payload)
    case 'removeTask':
      return removeTask(state, payload)
    case 'sortTask':
      return sortTask(state, payload)
    case 'toggleStatus':
      return toggleStatus(state)
    case 'moveTask':
      return moveTask(state, payload)
    default:
      return state
  }
}