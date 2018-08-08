<template>
  <div class="claim-wrapper">
    <h1 class="claim">SPACER</h1>
    <p class="subclaim">
        Begin your jurney through our amazing galaxy,
        and discover places you never event heard of.
    </p>
     <p class="subclaim">
        Type anything space-reloated to start.
    </p>
  </div>
</template>

<script>
export default {
  name: "Claim"
};
</script>

<style lang="scss" scoped>
.claim-wrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: aliceblue;
}

.claim {
  font-size: 50px;
  margin: 0;
}

.subclaim {
  margin-top: 20px 0 0 0;
  font-size: 13px;
}
</style>

