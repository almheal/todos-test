import * as types from "./mutation-types";
import { LOCAL_TODOS_NAME } from "@/const";
import { getLocalStorage, setLocalStorage } from "@/utils";

const createTodo = ({ commit, state }) => {
  if (!state.todo) {
    return;
  }

  const createdTodo = {
    id: Math.floor(Date.now() - Math.random()),
    title: state.todo,
    isCompleted: false,
  };

  commit(types.SET_NEW_TODO, createdTodo);
  commit(types.SET_TODO, "");
  setLocalStorage({ key: LOCAL_TODOS_NAME, data: state.todos });
};

const toggleIsCompleted = ({ commit, state }, id) => {
  const updatedTodos = state.todos.map((todo) => {
    if (todo.id === id) {
      todo.isCompleted = !todo.isCompleted;
    }

    return todo;
  });

  commit(types.SET_TODOS, updatedTodos);
  setLocalStorage({ key: LOCAL_TODOS_NAME, data: updatedTodos });
};

const clearCompleted = ({ commit, state }) => {
  const todosWithoutCompleted = state.todos.filter((todo) => !todo.isCompleted);

  commit(types.SET_TODOS, todosWithoutCompleted);
  setLocalStorage({ key: LOCAL_TODOS_NAME, data: todosWithoutCompleted });
};

const initTodos = ({ commit }) => {
  const savedTodos = getLocalStorage(LOCAL_TODOS_NAME);

  commit(types.SET_TODOS, savedTodos || []);
};

export default {
  createTodo,
  toggleIsCompleted,
  clearCompleted,
  initTodos,
};
