<template>
  <div class="wrapper">
    <Claim />
    <SearchInput />
    <!-- <div class="search">
      <label for="search">Search</label>
      <input type="text" id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput"
      /> -->
      <!-- <ul>
      <li v-for="item in results" :key="item.data[0].nasa_id">
          <p>{{item.data[0].description}}</p>
      </li>
      </ul> -->
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";
import Claim from "@/components/Claim";
import SearchInput from "@/components/SearchInput";

const API = "https://images-api.nasa.gov/search?q=";

export default {
  name: "Search",
  components: { Claim, SearchInput },
  data() {
    return {
      searchValue: "",
      results: []
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

    handleInput: debounce(function() {
      axios
        .get(`${API}${this.searchValue}&media_type=image`)
        .then(res => {
          // console.log(res);
          this.results = res.data.collection.items;
        })
        .catch(err => {
          console.log(err);
        });
    }, 500)
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
  background: linear-gradient(to right #ccc #df3);
}
</style>
