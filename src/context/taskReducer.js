import arrayMove from 'array-move'

const addTask = (state, title) => {
  let tempCurrent = state.current
  tempCurrent.push(`${title}-${tempCurrent.length}`)
  return { ...state, current: tempCurrent, progress: state.progress + 1 }
}

const removeTask = (state, index) => {
  let tempCurrent = state.current
  tempCurrent.splice(index, 1)
  return { ...state, current: tempCurrent, progress: state.progress - 1 }
}

const sortTask = (state, {oldIndex, newIndex}) => {
  const tempCurrent = arrayMove(state.current, oldIndex, newIndex)
  return { ...state, current: tempCurrent }
}

export const taskReducer = (state, { type, payload }) => {
  switch(type) {
    case 'addTask':
      return addTask(state, payload)
    case 'removeTask':
      return removeTask(state, payload)
    case 'sortTask':
      return sortTask(state, payload)
    default:
      return state
  }
}