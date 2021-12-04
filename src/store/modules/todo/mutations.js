import * as types from "./mutation-types";

export default {
  [types.SET_NEW_TODO](state, todo) {
    state.todos.unshift(todo);
  },

  [types.SET_TODOS](state, todos) {
    state.todos = todos;
  },

  [types.SET_TODO](state, todo) {
    state.todo = todo;
  },

  [types.SET_FILTER](state, filterParam) {
    state.activeFilterParam = filterParam;
  },
};
