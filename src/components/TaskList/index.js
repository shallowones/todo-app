import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Task from '../Task'
import Filter from '../Filter'
import { SET_FILTER_COMPLETED, SET_FILTER_NOT_COMPLETED } from '../../utils/constants'

export default class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    onTaskChange: PropTypes.func.isRequired,
    onTaskRemove: PropTypes.func.isRequired
  }

  state = {
    tasks: this.props.tasks,
    filtered: false
  }

  componentWillReceiveProps (nextProps) {
    nextProps.tasks !== this.state.tasks && this.setState({ filtered: false })
  }

  render () {
    const { onTaskChange, onTaskRemove } = this.props
    const tasks = (this.state.filtered) ? this.state.tasks : this.props.tasks

    return (
      <div>
        <ul>
          {tasks && tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}
              onChange={onTaskChange}
              onRemove={onTaskRemove}
            />
          ))}
        </ul>
        <Filter onSet={action => this.onSetFilter(action)}/>
      </div>
    )
  }

  onSetFilter (action = '') {
    const { tasks } = this.props

    switch (action) {
      case SET_FILTER_COMPLETED:
        return this.setState({ tasks: tasks.filter(task => task.completed), filtered: true })
      case SET_FILTER_NOT_COMPLETED:
        return this.setState({ tasks: tasks.filter(task => !task.completed), filtered: true })
      default:
        return this.setState({ filtered: false })
    }
  }
}
