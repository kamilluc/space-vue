<template>
    <div class="heroImage"></div>
</template>

<script>
export default {
  name: "HeroImage"
};
</script>

<style lang="scss" scoped>
.heroImage {
  position: fixed;
  top: 0;
  z-index: -1;

  width: 100%;
  height: 100vh;
  background: linear-gradient(#aaa, #e66465);
}
</style>
