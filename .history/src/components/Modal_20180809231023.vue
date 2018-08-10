<template>
    <div class="outerWrapper">
        <div class="innerWrapper">
            <div class="photo">

<img src="https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAyOS81MzMvb3JpZ2luYWwvZnVsbC1tb29uLWp1YXJlei1tZXhpY28uanBn" alt="">
            </div>
            <div class="description">
                <h2 class="title">Lorem ipsum</h2>
                <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, dolore debitis! Non aspernatur in ipsam asperiores earum culpa! Delectus ratione dolorem voluptas eum fugit cumque aliquid, a hic dicta exercitationem?</p>

            </div>
        </div>
        <div class="close"></div>
    </div>
</template>

<script>
export default {
  name: "Modal"
};
</script>

<style lang="scss" scoped>
.outerWrapper {
  background: #f6f6f6;
  max-width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.close {
}
.innerWrapper {
  display: flex;
  height: 100%;
  padding: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .photo {
    width: 100%;
    height: 50%;
    background: black;

    img {
      width: 100%;
    }
  }

  .description {
    color: #333;
  }
}
</style>
