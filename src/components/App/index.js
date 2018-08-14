import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AddTask from '../AddTask'
import TaskList from '../TaskList'
import * as actions from '../../redux/actions'

class App extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    actions: PropTypes.shape({
      addTask: PropTypes.func.isRequired,
      changeTask: PropTypes.func.isRequired,
      removeTask: PropTypes.func.isRequired
    })
  }

  render () {
    const { tasks, actions } = this.props

    return (
      <div>
        <AddTask onTaskAdd={taskName => actions.addTask(taskName)}/>
        <TaskList
          tasks={tasks}
          onTaskChange={taskId => actions.changeTask(taskId)}
          onTaskRemove={taskId => actions.removeTask(taskId)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ tasks: state })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(App)
