import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    const { todos, handleChange } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            checked={todo.completed}
            title={todo.title}
            handleChangeProps={handleChange}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TodosList;
