import { createStore } from 'redux'
import getRandom from '../utils/random'
import { ADD_TASK, CHANGE_TASK, REMOVE_TASK } from '../utils/constants'

const DEFAULT_TASK = {
  id: 0,
  name: '',
  completed: false
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          ...DEFAULT_TASK,
          id: getRandom(),
          name: action.payload
        }
      ]
    case CHANGE_TASK:
      return state.map(task => {
        let newTask = task
        newTask.id === action.payload && (newTask = { ...newTask, completed: !newTask.completed })

        return newTask
      })
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload)
    default:
      return state
  }
}

export default createStore(reducer)
