<template>
  <div id="portfolio-container">
    <div id="portfolio-container-inner">
      <div id="portfolio-chunk1" class="portfolio-chunk"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

#portfolio-container {
  position: absolute;
  background-color: #ef5350;
  width: 100vw;
  height: 100vh;
  color: $ColorWhite;
}

#portfolio-container-inner {
  margin: 100px 0px 0px 0px;
}
</style>
