<template>
  <div class="app-field">
    <div class="app-field__wrapper">
      <input
        class="app-field__input"
        type="text"
        :class="{ 'is-icon': icon }"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <arrow-down-icon class="app-field__icon" v-if="icon === 'arrow-down'" />
    </div>
  </div>
</template>

<script>
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";

export default {
  name: "AppField",

  components: {
    ArrowDownIcon,
  },

  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.app-field {
  &__wrapper {
    position: relative;
  }

  &__input {
    width: 100%;
    padding: 20px 6px;
    font-size: 18px;
    color: #3d4a52;

    &::placeholder {
      font-style: italic;
      font-weight: 500;
      color: #e7e7e7;
    }

    &.is-icon {
      padding-left: 60px;
    }
  }

  &__icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    fill: #e7e7e7;
  }
}
</style>
