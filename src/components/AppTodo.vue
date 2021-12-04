<template>
  <div class="todo">
    <form class="todo__form" @submit.prevent="$emit('submitTodo')">
      <app-field
        placeholder="What needs to be done?"
        icon="arrow-down"
        :value="todo"
        @input="$emit('changeTodo', $event)"
      />
    </form>
    <ul class="todo__list" v-if="todos.length">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :id="todo.id"
        :title="todo.title"
        :isCompleted="todo.isCompleted"
        @clickItem="$emit('clickItem', $event)"
      />
    </ul>
    <div class="todo__empty" v-else>List is empty</div>
    <div class="todo__footer">
      <div class="todo__length">{{ activeTodosLength }} item left</div>
      <div class="todo__row">
        <app-button
          class="todo__filter"
          v-for="filter in filters"
          :key="filter.title"
          :isActive="filter.param === activeFilterParam"
          @clickButton="$emit('clickFilter', filter.param)"
        >
          {{ filter.title }}
        </app-button>
      </div>
      <app-button v-if="isCompleted" @clickButton="$emit('clearCompleted')"
        >Clear completed</app-button
      >
    </div>
  </div>
</template>

<script>
import AppField from "@/components/AppField";
import TodoItem from "@/components/TodoItem";
import AppButton from "@/components/AppButton";

export default {
  name: "AppTodo",

  components: {
    AppField,
    TodoItem,
    AppButton,
  },

  props: {
    todos: {
      type: Array,
      default: () => [],
    },
    todo: {
      type: String,
      default: "",
    },
    filters: {
      type: Array,
      default: () => [],
    },
    activeFilterParam: {
      type: String,
      default: "",
    },
    activeTodosLength: {
      type: Number,
      default: 0,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  max-width: 550px;
  width: 100%;
  background-color: #fff;

  &__form {
    border-bottom: 2px solid #efefef;
  }

  &__empty {
    text-align: center;
    padding: 20px 6px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #efefef;
    padding: 8px 15px;
  }

  &__filter {
    margin: 0 5px;
  }
}
</style>
