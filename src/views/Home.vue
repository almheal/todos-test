<template>
  <div class="home">
    <div class="home__inner">
      <app-todo
        :todos="getTodosByFilter"
        :todo="todo"
        :filters="filters"
        :activeFilterParam="activeFilterParam"
        :activeTodosLength="getActiveTodosLength"
        :isCompleted="isCompleted"
        @changeTodo="setTodo"
        @submitTodo="createTodo"
        @clickItem="toggleIsCompleted"
        @clickFilter="setFilter"
        @clearCompleted="clearCompleted"
      />
    </div>
  </div>
</template>

<script>
import AppTodo from "@/components/AppTodo";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "Home",

  components: {
    AppTodo,
  },

  computed: {
    ...mapState({
      todo: (state) => state.todo.todo,
      filters: (state) => state.todo.filters,
      activeFilterParam: (state) => state.todo.activeFilterParam,
    }),

    ...mapGetters({
      getTodosByFilter: "todo/getTodosByFilter",
      getActiveTodosLength: "todo/getActiveTodosLength",
      isCompleted: "todo/isCompleted",
    }),
  },

  methods: {
    ...mapActions({
      createTodo: "todo/createTodo",
      toggleIsCompleted: "todo/toggleIsCompleted",
      clearCompleted: "todo/clearCompleted",
      initTodos: "todo/initTodos",
    }),

    ...mapMutations({
      setTodo: "todo/SET_TODO",
      setFilter: "todo/SET_FILTER",
    }),
  },

  mounted() {
    this.initTodos();
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__inner {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
  }
}
</style>
