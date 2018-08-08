<template>
  <div class="wrapper">
        <HeroImage />

    <Claim />
    <SearchInput v-model="searchValue"
     @input="handleInput" />
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
import HeroImage from "@/components/HeroImage";

const API = "https://images-api.nasa.gov/search?q=";

export default {
  name: "Search",
  components: { Claim, SearchInput, HeroImage },
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
      console.log(this.searchValue);
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
  margin: 0;
  width: 100%;
  min-height: 100vh;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  // height: 100vh;

  justify-content: center;
}
</style>
