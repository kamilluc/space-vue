<template>
  <div class="wrapper">
    <div class="search">
      <input type="text" name="search"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style lang="sass" scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 30px;
    width: 100%;

    .search{
width: 300px;
    }
  }
</style>
