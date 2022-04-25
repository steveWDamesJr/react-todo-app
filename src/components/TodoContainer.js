import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

class TodoContainer extends React.Component {
  state = {
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

  handleChange = (id) => {
    console.log('clicked', id);
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
        />
      </div>
    );
  }
}

export default TodoContainer;
