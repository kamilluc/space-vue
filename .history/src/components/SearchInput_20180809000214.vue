<template>
    <div class="searchinput-wrapper">
      <!-- <label for="search">Search</label> -->
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
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  height: 30px;
  border: 0;
  background: none;
  border-bottom: 1px solid white;
  transition: box-shadow 0.3s ease-out;
}

input:focus {
  outline: none;
  box-shadow: 0 10px 20px -8px rgba(255, 255, 255, 0.5);
}
</style>
