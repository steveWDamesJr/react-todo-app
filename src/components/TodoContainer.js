import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Setup development Environment for you're Mac",
          completed: false,
        },
        {
          id: 2,
          title: 'Create dependencies: for example- prettier',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy website',
          completed: false,
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const todoUpdate = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: todoUpdate,
      };
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <TodosList todos={todos} handleChange={this.handleChange} />
      </>
    );
  }
}
export default TodoContainer;
