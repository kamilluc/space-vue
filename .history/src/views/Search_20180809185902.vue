<template>
  <div :class="[{flexStart: step === 1}, 'wrapper']">
      <transition name="slide">

    <img src="../assets/heroimage.png" class="logo" v-if="step===1">
    </transition>

      <transition name="fade">
        <HeroImage v-if="step===0" />
</transition>
    <Claim v-if="step===0" />
    <SearchInput v-model="searchValue"
     @input="handleInput" :dark="step ===1" class="search-input"/>
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
      loading: false,
      step: 0,
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
      this.loading = true;
      console.log(this.searchValue);
      axios
        .get(`${API}${this.searchValue}&media_type=image`)
        .then(res => {
          // console.log(res);
          this.results = res.data.collection.items;
          this.loading = false;
          this.step = 1;
        })
        .catch(err => {
          console.log(err);
        });
    }, 500)
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: margin-top 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  margin-top: -50px;
}

.wrapper {
  margin: 0;
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  // height: 100vh;

  justify-content: center;

  &.flexStart {
    justify-content: flex-start;
  }
}

.logo {
  position: absolute;
  top: 30px;
  max-height: 100px;
}
.search-input {
  margin-top: 140px;
}
</style>
