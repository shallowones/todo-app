import { ADD_TASK, CHANGE_TASK, REMOVE_TASK } from '../utils/constants'

// добавить задачу
export const addTask = taskName => ({ type: ADD_TASK, payload: taskName })

// установить задаче статус "Выполнена" или "Не выполнена"
export const changeTask = taskId => ({ type: CHANGE_TASK, payload: taskId })

// установить задаче статус "Выполнена" или "Не выполнена"
export const removeTask = taskId => ({ type: REMOVE_TASK, payload: taskId })
