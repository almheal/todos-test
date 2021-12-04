export default {
  getTodosByFilter: ({ todos, activeFilterParam }) => {
    if (activeFilterParam === "all") {
      return todos;
    }

    return todos.filter((todo) =>
      activeFilterParam === "active" ? !todo.isCompleted : todo.isCompleted
    );
  },
  isCompleted: ({ todos }) =>
    todos.reduce((acc, todo) => {
      if (todo.isCompleted) {
        acc = true;
      }

      return acc;
    }, false),
  getActiveTodosLength: ({ todos }) =>
    todos.reduce((acc, todo) => (acc += !todo.isCompleted ? 1 : 0), 0),
};
