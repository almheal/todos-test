<template>
  <li class="todo-item" @click="$emit('clickItem', id)">
    <div class="todo-item__icon">
      <check-mark-icon v-if="isCompleted" />
    </div>
    <div class="todo-item__title" :class="{ 'is-completed': isCompleted }">
      {{ title }}
    </div>
  </li>
</template>

<script>
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";

export default {
  name: "TodoItem",

  components: {
    CheckMarkIcon,
  },

  props: {
    title: {
      type: String,
      default: "",
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    id: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 6px 20px 60px;
  border-bottom: 1px solid #efefef;
  color: #3d4a52;
  cursor: pointer;
  font-size: 18px;

  &:last-child {
    border-bottom: none;
  }

  &__icon {
    position: absolute;
    left: 6px;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #efefef;
    padding: 3px;
    color: #50a684;
  }

  &__title {
    transition: 0.3s;

    &.is-completed {
      color: #e7e7e7;
      text-decoration: line-through;
    }
  }
}
</style>
