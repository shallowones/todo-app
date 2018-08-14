import React from 'react'
import PropTypes from 'prop-types'

Task.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default function Task (props) {
  const { id, name, completed, onChange, onRemove } = props

  return (
    <li>
      {
        (completed)
          ? (<s>{name}</s>)
          : name
      }
      <button type="button" onClick={() => onChange(id)}>
        {completed ? 'Не выполнено' : 'Выполнено'}
      </button>
      <button type="button" onClick={() => onRemove(id)}>Удалить</button>
    </li>
  )
}
