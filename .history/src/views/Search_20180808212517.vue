<template>
  <div class="wrapper">
    <div class="search">
      <label for="search">Search</label>
      <input type="text" id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";

const API = "https://images-api.nasa.gov/search?q=";

export default {
  name: "Search",
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    // handleInput(e) {
    //   axios
    //     .get(`${API}${this.searchValue}&media_type=image`)
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }

    handleInput: debounce(() => {
      axios
        .get(`${API}${this.searchValue}&media_type=image`)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }, 800)
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
}

.search {
  width: 300px;
  display: flex;
  flex-direction: column;

  label {
    font-family: Montserrat, sans-serif;
  }

  input {
    height: 50px;
    border: 0;
    border-bottom: 1px solid black;
  }
}
</style>
