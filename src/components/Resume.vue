<template>
  <div id="resume-container">
    <div id="resume-container-inner">
      <div id="resume-img-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

#resume-container {
  position: absolute;
  background-color: $ColorGlobalBackground;
  width: 100vw;
  height: 100vh;
  color: $ColorWhite;
}

#resume-container-inner {
  margin: 100px 0px 0px 0px;

  #resume-img-container {
    position: absolute;
    background-color: white;
    padding: 20px 0px 20px 0px;
    width: 652px;
    height: 768px;
    border-radius: 5px;
    margin: auto;
    left: 0;
    right: 0;
    box-shadow: $LightShadow;
    background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/resume-screenshot.png");
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
