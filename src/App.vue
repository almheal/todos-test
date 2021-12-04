<template>
  <div id="app">
    <component :is="layout" v-if="layout">
      <router-view />
    </component>
    <router-view v-else />
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";

export default {
  name: "App",

  components: {
    EmptyLayout,
  },

  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>
