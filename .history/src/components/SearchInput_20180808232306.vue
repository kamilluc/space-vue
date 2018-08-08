<template>
    <div class="searchinput-wrapper">
      <label for="search">Search</label>
      <input type="text" id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput"
      />
      <!-- <ul>
      <li v-for="item in results" :key="item.data[0].nasa_id">
          <p>{{item.data[0].description}}</p>
      </li>
      </ul> -->
    </div>
</template>

<script>
export default {
  name: "SearchInput"
};
</script>

<style lang="scss" scoped>
.searchinput-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 250px;
}

input {
  height: 30px;
  border: 0;
  background: none;
  border-bottom: 1px solid black;
}
</style>
