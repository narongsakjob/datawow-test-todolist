import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import { taskReducer } from './taskReducer'

const initialState = {
  current: [],
  done: [],
  progress: 0
}

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  const addTask = () => dispatch({ type: 'addTask', payload: 'test' })


  const removeTask = () => dispatch({ type: 'removeTask', payload: 0 })

  return (
    <TaskContext.Provider value={{ ...state, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export default GlobalState