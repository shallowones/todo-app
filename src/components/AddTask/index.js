import React, { Component } from 'react'
import PropTypes from 'prop-types'

const INITIAL_STATE = {
  value: ''
}

export default class AddTask extends Component {
  static propTypes = {
    onTaskAdd: PropTypes.func.isRequired
  }

  state = INITIAL_STATE

  render () {
    return (
      <div>
        <input onChange={event => this.onInputChange(event)} value={this.state.value}/>
        <button onClick={() => this.onButtonClick()}>Добавить</button>
      </div>
    )
  }

  onInputChange (event) {
    const { value } = event.target
    this.setState({ value })
  }

  onButtonClick () {
    this.props.onTaskAdd(this.state.value)
    this.setState(INITIAL_STATE)
  }
}
