import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import { taskReducer } from './taskReducer'

const initialState = {
  current: [],
  done: [],
  status: 'Current'
}

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  const addTask = payload => dispatch({ type: 'addTask', payload: payload })
  const removeTask = payload => dispatch({ type: 'removeTask', payload: payload })
  const sortTask = payload => dispatch({ type: 'sortTask', payload: payload })
  const toggleStatus = () => dispatch({ type: 'toggleStatus' })
  const moveTask = payload => dispatch({ type: 'moveTask', payload: payload })
  const editTask = payload => dispatch({ type: 'editTask', payload: payload })

  return (
    <TaskContext.Provider value={{
      addTask,
      removeTask,
      sortTask,
      toggleStatus,
      moveTask,
      editTask,
      ...state, 
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default GlobalState