const addTask = (state, payload) => {
  let tempCurrent = state.current
  tempCurrent.push(payload)
  return { ...state, current: tempCurrent, progress: state.progress + 1 }
}

const removeTask = (state, index) => {
  let tempCurrent = state.current
  tempCurrent.splice(index, 1)
  return { ...state, current: tempCurrent, progress: state.progress - 1 }
}

export const taskReducer = (state, { type, payload }) => {
  switch(type) {
    case 'addTask':
      return addTask(state, payload)
    case 'removeTask':
      return removeTask(state, payload)
    default:
      return state
  }
}