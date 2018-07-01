<template>
  <div id="portfolio-container">
    <div id="portfolio-container-inner">
      <div id="portfolio-chunk1" class="portfolio-chunk">
        <div id="chunk-left" class="chunk-grid">
          <div id="web1" class="grid-el web"></div>

          <div id="web3" class="grid-el web"></div>
          <div id="il1" class="grid-el il"></div>
          <div id="logo1" class="grid-el il"></div>
          <div id="il3" class="grid-el il"></div>
        </div>
        <div id="chunk-right" class="chunk-grid">
          <div id="web2" class="grid-el web"></div>
          <!--div id="mobile1" class="grid-el mobile"></div-->
          <div id="mock1" class="grid-el mock"></div>
          <div id="il2" class="grid-el il"></div>
        </div>
      </div>
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

//desktop
@media only screen and (min-width: 768px) {
  #portfolio-container {
    position: absolute;
    background-color: #90A4AE;
    width: 100%;
    //height: 100vh;
    color: $ColorWhite;
  }

  #portfolio-container-inner {
    margin: 0px 0px 0px 0px;

  }

  .portfolio-chunk {
    //background-color: black;
    padding: 0px;
    display: inline-flex;
  }

  .chunk-grid {
    //background-color: black;
  }

  #portfolio-chunk1 {
    padding: 150px 0px 40px 0px;
    //background-color: #B0BEC5;

    #chunk1-grid {
      position: relative;
      //background-color: $ColorWhite;
      width: 1200px;
      //height: 500px;
      margin: auto;
      left: 0;
      right: 0;
    }
  }
}

h2 {
  margin-bottom: 50px;
}

.grid-el {
  background-color: $ColorWhite;
  margin: 0px 10px 20px 10px;
  border-radius: 5px;
  box-shadow: $LightShadow;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 500ms;

  &:hover {
    opacity: 0.2;
    cursor: pointer;
  }
}

#web1 {
  background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/portfolio-items/web-1.png");
  height: 266px;
  width:  500px;
}

#web2 {
  background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/portfolio-items/web-2.png");
  height: 281px;
  width:  500px;
}

#web3 {
  background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/portfolio-items/web-3.png");
  height: 281px;
  width:  500px;
}

#mock1 {
  background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/portfolio-items/mockups-1.png");
  height: 320px;
  width:  500px;
}

#il1 {
  background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/portfolio-items/illustrations-1.png");
  height: 320px;
  width:  500px;
}

#il2 {
  background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/portfolio-items/illustrations-2.png");
  height: 888px;
  width:  500px;
}

#il3 {
  background-color: #D6D6D6;
  background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/portfolio-items/illustrations-3.png");
  height: 600px;
  width:  500px;
}

</style>
