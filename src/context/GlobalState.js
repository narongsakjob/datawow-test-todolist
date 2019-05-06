import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import { taskReducer } from './taskReducer'
import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  SORT_TASK,
  MOVE_TASK,
  TOGGLE_STATUS
} from './actions'

const initialState = {
  current: [],
  done: [],
  status: 'Current'
}

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  const addTask = payload => dispatch({ type: ADD_TASK, payload: payload })
  const removeTask = payload => dispatch({ type: REMOVE_TASK, payload: payload })
  const sortTask = payload => dispatch({ type: SORT_TASK, payload: payload })
  const toggleStatus = () => dispatch({ type: TOGGLE_STATUS })
  const moveTask = payload => dispatch({ type: MOVE_TASK, payload: payload })
  const editTask = payload => dispatch({ type: EDIT_TASK, payload: payload })

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