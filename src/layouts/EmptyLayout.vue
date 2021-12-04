<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "EmptyLayout",
};
</script>

<style lang="scss" scoped>
.layout {
  background-image: linear-gradient(
    109.6deg,
    rgb(223, 234, 247) 11.2%,
    rgb(244, 248, 252) 91.1%
  );
}
</style>
