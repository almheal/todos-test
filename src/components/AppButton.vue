<template>
  <button
    class="app-button"
    :class="{ 'is-active': isActive }"
    :type="buttonType"
    @click="$emit('clickButton')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",

  props: {
    buttonType: {
      type: String,
      default: "button",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  background-color: transparent;
  padding: 5px 6px;
  border: 1px solid transparent;
  transition: border-color 0.3s;

  &.is-active {
    border-color: #efefef;
  }
}
</style>
