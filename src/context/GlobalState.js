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
  const removeTask = payload => dispatch({ type: 'removeTask', payload: payload })
  const sortTask = payload => dispatch({ type: 'sortTask', payload: payload })


  return (
    <TaskContext.Provider value={{
     addTask, removeTask, sortTask, ...state, 
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default GlobalState