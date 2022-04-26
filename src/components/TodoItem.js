import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const {
    checked, title, handleChangeProps, id,
  } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleChangeProps(id)}
      />
      {' '}
      {title}
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default TodoItem;
