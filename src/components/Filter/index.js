import React from 'react'
import PropTypes from 'prop-types'

import { SET_FILTER_COMPLETED, SET_FILTER_NOT_COMPLETED } from '../../utils/constants'

const BUTTONS_MAP = [
  {
    name: 'Показать все'
  },
  {
    name: 'Показать выполненные',
    action: SET_FILTER_COMPLETED
  },
  {
    name: 'Показать невыполненные',
    action: SET_FILTER_NOT_COMPLETED
  }
]

Filter.propTypes = {
  onSet: PropTypes.func.isRequired
}

export default function Filter (props) {
  return BUTTONS_MAP.map((button, index) => (
    <button type="button" key={index} onClick={() => props.onSet(button.action)}>{button.name}</button>
  ))
}
