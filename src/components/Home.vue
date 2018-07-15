<template>
  <div id="home-container">
    <div id="home-container-inner">
      <div id="home-indicator-container" v-bind:class="{ banner1active: banner1active, banner2active: banner2active, banner3active: banner3active, banner4active: banner4active}">
        <div id="ind1" class="ind"></div>
        <div id="ind2" class="ind"></div>
        <div id="ind3" class="ind"></div>
        <div id="ind4" class="ind"></div>
      </div>
      <div id="banner1" class="banner">
        <div id="text1" class="text">
          <h2>Hi!</h2>
          <p>My name is <strong>Trent</strong> :) I'm a Font-end Software Developer, Graphic Designer, and UX Specialist.</p>
          <div class="arrow-container"><div class="arrow arrow1"></div><div class="arrow arrow2"></div></div>
        </div>
      </div>
      <div id="banner2" class="banner">
        <div id="text2" class="text">
          <h2>I'm obsessed with design.</h2>
          <p>Ever since I was in elementary school I'd find myself drawing mockups for futuristic fictional game consoles and computers. I'd doodle designs of laptops, game controllers, cell phones, and even a dream operating system I always wanted to create. On top of all this, I took a dive into game design with an early version of GameMaker in order to create Sonic the Hedgehog fangames in my free time. In a nutshell, design is in my blood, and I know for certain that I wanna continue solving the world's design challenges as long as I can. I particularly dig Adobe suite as well as Axure RP for high fidelity prototyping.</p>
        </div>
      </div>
      <div id="banner3" class="banner">
        <div id="text3" class="text">
          <h2>Code is my paintbrush.</h2>
          <p>After teaching myself HTML, CSS, and Javascript before entering highschool, I became determined to learn as many programming languages as possible in order to build what I always dreamed of building. Beyond web developemt, I began to teach myself mobile app development as well as basic game development throughout high school. Eventually I became well-versed in lots of languages and frameworks incuding Java, C++, Ruby on Rails, ReactJS, AngularJS, VueJS, SQL, XML, SASS, Bootstrap, and Flutter.</p>
        </div>
      </div>
      <div id="banner4" class="banner">
        <div id="text4" class="text">
          <h2>I have a blog!</h2>
          <p>When I'm not coding or drawing, I'm usually writing. I'm a huge introvert so sometimes I have trouble voicing my opinion on things. To pacify this shyness I created a blog as a space for me to write about important issues, not-so-important issues, general fun topics, or just my general interests. It's a groovy place so <a href="#">feel free to visit!</a></p>
          <div id="social-bubbles">
            <a href="https://www.facebook.com/trent.brew.1"><div id="sm-bubble-fb" class="sm-bubble"></div></a>
            <a href="https://twitter.com/trent_brew"><div id="sm-bubble-tw" class="sm-bubble"></div></a>
            <a href="https://www.instagram.com/trenton_bru/?hl=en"><div id="sm-bubble-ig" class="sm-bubble"></div></a>
            <a href="https://www.pinterest.com/tbrew212/"><div id="sm-bubble-pt" class="sm-bubble"></div></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      banner1active: true,
      banner2active: false,
      banner3active: false,
      banner4active: false
    }
  },
  methods: {
    handleScroll() {
      if(window.scrollY < window.innerHeight * .6) {
        this.banner1active = true;
        this.banner2active = false;
        this.banner3active = false;
        this.banner4active = false;
      }
      else if((window.scrollY >= window.innerHeight * .6) && (window.scrollY < window.innerHeight * 1.6)) {
        this.banner1active = false;
        this.banner2active = true;
        this.banner3active = false;
        this.banner4active = false;
      }
      else if((window.scrollY >= window.innerHeight * 1.6) && (window.scrollY < window.innerHeight * 2.6)) {
        this.banner1active = false;
        this.banner2active = false;
        this.banner3active = true;
        this.banner4active = false;
      }
      else {
        this.banner1active = false;
        this.banner2active = false;
        this.banner3active = false;
        this.banner4active = true;
      }

      //console.log(this.banner2active);
    },
    autoScroll() {
      window.scrollY = 500;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

//----------mobile styles----------
@media only screen and (max-width: 1068px) {
  #home-container {
    background-color: $ColorGlobalBackground;
    color: $ColorText;
    padding: $NavHeight - 15px 0px 0px 0px;
  }

  .banner {
    background-color: blue;
    height: 100vh;
    background-position: 78% 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: $ColorGlobalBackground;
    padding: 100px 0px 0px 0px;

    h2 {
      margin: 0px;
    }
  }

  #banner1 {
    //background-color: #1565C0;
    background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(1).png");
  }

  #banner2 {
    //background-color: #0D47A1;
    background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(2).png");
  }

  #banner3 {
    //background-color: #1565C0;
    background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(3).png");
  }

  #banner4 {
    //background-color: #0D47A1;
    background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(4).png");
  }

  .text {
    width: 40%;
    text-align: left;
    margin: 0px 0px 0px 50px;
    font-size: 12px;

    a {
      color: $ColorText;
    }
  }

  #text1 {
    margin-top: 40px;
  }

  #text4 {
    margin-top: 110px;
  }

  .arrow-container {
    position: absolute;
    //background-color: black;
    width:  130px;
    height: 120px;
    margin: auto;
    top: -20px;
    left: 0;
    bottom: 0;
    opacity: 0.6;
  }

  .arrow {
    opacity: 0;
    position: relative;
    left: 42%;
    top: 55%;
    transition: visibility 500ms linear;
  }

  .arrow1 {
    animation: arrow-movement 2s ease-in-out infinite;
  }
  .arrow2 {
    animation: arrow-movement 2s 1s ease-in-out infinite;
  }

  .arrow:before,
  .arrow:after {
    background: $ColorText;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
  }

  .arrow:before {
    transform: rotate(45deg) translateX(-23%);
    transform-origin: top left;
  }

  .arrow:after {
    transform: rotate(-45deg) translateX(23%);
    transform-origin: top right;
  }

  // Animation
  @keyframes arrow-movement {
    0% {
      opacity: 0;
      top: 45%;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  #social-bubbles {
    //background-color: red;
    display: inline-flex;

    .sm-bubble {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: black;
      opacity: 0.4;
      margin: 4px;

      &:hover {
        opacity: 0.2;
      }
    }

    #sm-bubble-fb {
      background-image: url("https://image.freepik.com/free-icon/circle-facebook_318-10967.jpg");
      background-position: center;
      background-size: contain;
    }
    #sm-bubble-tw {
      background-image: url("https://image.freepik.com/free-icon/social-twitter-in-acircle-logo_318-28676.jpg");
      background-position: center;
      background-size: contain;
    }
    #sm-bubble-ig {
      background-image: url("https://i0.wp.com/www.traveloffpath.com/wp-content/uploads/2017/11/instagram-icon-white-on-black-circle.png?ssl=1");
      background-position: center;
      background-size: contain;
    }
    #sm-bubble-pt {
      background-image: url("https://image.freepik.com/free-icon/pinterest-round_318-26597.jpg");
      background-position: center;
      background-size: contain;
    }
  }
}

//----------tablet styles----------
@media only screen and (min-width: 1068px) {
  #home-container {
    position: absolute;
    background-color: $ColorGlobalBackground;
    width: 100%;
    height: 100vh;
    //font-family: Roboto, sans-serif;
  }

  #home-container-inner {
    margin: 0px 0px 0px 0px;

    .banner {
      height: 100vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      background-color: $ColorGlobalBackground;
    }

    #banner1 {
      //background-color: #1565C0;
      background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(1).png");

      h2 {
        font-size: 60px;
      }
    }

    #banner2 {
      //background-color: #0D47A1;
      background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(2).png");
    }

    #banner3 {
      //background-color: #1565C0;
      background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(3).png");
    }

    #banner4 {
      //background-color: #0D47A1;
      background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(4).png");
    }

    .text {
      color: $ColorLightGray;
      text-align: left;
      width: 420px;
      margin: 0px 0px 0px 180px;

      p {
        line-height: 25px;
        color: $ColorText;
        opacity: 0.6;
      }

      a {
        color: $ColorText;
      }

      h2 {
        margin: 0px;
        padding: 0px;
        font-size: 55px;
        color: $ColorText;
        //opacity: 0.6;
      }
    }

    #text1 {
      padding-top: 40vh;
    }

    #text2 {
      padding-top: 28vh;
    }

    #text3 {
      padding-top: 29vh;
    }

    #text4 {
      padding-top: 35vh;
    }

    #social-bubbles {
      //background-color: red;
      display: inline-flex;

      .sm-bubble {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: black;
        opacity: 0.4;
        margin: 4px;

        &:hover {
          opacity: 0.2;
        }
      }

      #sm-bubble-fb {
        background-image: url("https://image.freepik.com/free-icon/circle-facebook_318-10967.jpg");
        background-position: center;
        background-size: contain;
      }
      #sm-bubble-tw {
        background-image: url("https://image.freepik.com/free-icon/social-twitter-in-acircle-logo_318-28676.jpg");
        background-position: center;
        background-size: contain;
      }
      #sm-bubble-ig {
        background-image: url("https://i0.wp.com/www.traveloffpath.com/wp-content/uploads/2017/11/instagram-icon-white-on-black-circle.png?ssl=1");
        background-position: center;
        background-size: contain;
      }
      #sm-bubble-pt {
        background-image: url("https://image.freepik.com/free-icon/pinterest-round_318-26597.jpg");
        background-position: center;
        background-size: contain;
      }
    }
  }

  .arrow-container {
    position: absolute;
    //background-color: black;
    width: 200px;
    height: 300px;
    margin: auto;
    top: 200px;
    left: 110px;
    bottom: 0;
    opacity: 0.6;
  }

  .arrow {
    opacity: 0;
    position: relative;
    left: 42%;
    top: 55%;
    transition: visibility 500ms linear;
  }

  .arrow1 {
    animation: arrow-movement 2s ease-in-out infinite;
  }
  .arrow2 {
    animation: arrow-movement 2s 1s ease-in-out infinite;
  }

  .arrow:before,
  .arrow:after {
    background: $ColorText;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
  }

  .arrow:before {
    transform: rotate(45deg) translateX(-23%);
    transform-origin: top left;
  }

  .arrow:after {
    transform: rotate(-45deg) translateX(23%);
    transform-origin: top right;
  }

  // Animation
  @keyframes arrow-movement {
    0% {
      opacity: 0;
      top: 45%;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  #home-indicator-container {
    position: fixed;
    height: 90px;
    color: $ColorText;
    margin: auto;
    top:0;
    bottom: 0;
    left: 90px;

    .ind {
      margin: 5px;
      width: 7px;
      height: 7px;
      border-radius: 100%;
      border: solid $ColorText 1px;
      opacity: 0.6;
    }
  }

  .banner1active {
    #ind1 {
      background-color: $ColorText;
    }
  }

  .banner2active {
    #ind2 {
      background-color: $ColorText;
    }
  }

  .banner3active {
    #ind3 {
      background-color: $ColorText;
    }
  }

  .banner4active {
    #ind4 {
      background-color: $ColorText;
    }
  }
}

//----------desktop styles----------768
@media only screen and (min-width: 1668px) {
  #home-container {
    position: absolute;
    background-color: $ColorGlobalBackground;
    width: 100%;
    height: 100vh;
    //font-family: Roboto, sans-serif;
  }

  #home-container-inner {
    margin: 0px 0px 0px 0px;

    .banner {
      height: 100vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      background-color: $ColorGlobalBackground;
    }

    #banner1 {
      //background-color: #1565C0;
      background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(1).png");

      h2 {
        font-size: 60px;
      }
    }

    #banner2 {
      //background-color: #0D47A1;
      background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(2).png");
    }

    #banner3 {
      //background-color: #1565C0;
      background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(3).png");
    }

    #banner4 {
      //background-color: #0D47A1;
      background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/trentbrew-ps/res/banners/trentbrew-backsplash(4).png");
    }

    .text {
      color: $ColorLightGray;
      text-align: left;
      width: 420px;
      margin: 0px 0px 0px 380px;

      p {
        line-height: 25px;
        color: $ColorText;
        opacity: 0.6;
      }

      a {
        color: $ColorText;
      }

      h2 {
        margin: 0px;
        padding: 0px;
        font-size: 55px;
        color: $ColorText;
        //opacity: 0.6;
      }
    }

    #text1 {
      padding-top: 40vh;
    }

    #text2 {
      padding-top: 28vh;
    }

    #text3 {
      padding-top: 29vh;
    }

    #text4 {
      padding-top: 35vh;
    }

    #social-bubbles {
      //background-color: red;
      display: inline-flex;

      .sm-bubble {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: black;
        opacity: 0.4;
        margin: 4px;

        &:hover {
          opacity: 0.2;
        }
      }

      #sm-bubble-fb {
        background-image: url("https://image.freepik.com/free-icon/circle-facebook_318-10967.jpg");
        background-position: center;
        background-size: contain;
      }
      #sm-bubble-tw {
        background-image: url("https://image.freepik.com/free-icon/social-twitter-in-acircle-logo_318-28676.jpg");
        background-position: center;
        background-size: contain;
      }
      #sm-bubble-ig {
        background-image: url("https://i0.wp.com/www.traveloffpath.com/wp-content/uploads/2017/11/instagram-icon-white-on-black-circle.png?ssl=1");
        background-position: center;
        background-size: contain;
      }
      #sm-bubble-pt {
        background-image: url("https://image.freepik.com/free-icon/pinterest-round_318-26597.jpg");
        background-position: center;
        background-size: contain;
      }
    }
  }

  .arrow-container {
    position: absolute;
    //background-color: black;
    width: 200px;
    height: 300px;
    margin: auto;
    top: 200px;
    left: 310px;
    bottom: 0;
    opacity: 0.6;
  }

  .arrow {
    opacity: 0;
    position: relative;
    left: 42%;
    top: 55%;
    transition: visibility 500ms linear;
  }

  .arrow1 {
    animation: arrow-movement 2s ease-in-out infinite;
  }
  .arrow2 {
    animation: arrow-movement 2s 1s ease-in-out infinite;
  }

  .arrow:before,
  .arrow:after {
    background: $ColorText;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
  }

  .arrow:before {
    transform: rotate(45deg) translateX(-23%);
    transform-origin: top left;
  }

  .arrow:after {
    transform: rotate(-45deg) translateX(23%);
    transform-origin: top right;
  }

  // Animation
  @keyframes arrow-movement {
    0% {
      opacity: 0;
      top: 45%;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  #home-indicator-container {
    position: fixed;
    height: 90px;
    color: $ColorText;
    margin: auto;
    top:0;
    bottom: 0;
    left: 290px;

    .ind {
      margin: 5px;
      width: 7px;
      height: 7px;
      border-radius: 100%;
      border: solid $ColorText 1px;
      opacity: 0.6;
    }
  }

  .banner1active {
    #ind1 {
      background-color: $ColorText;
    }
  }

  .banner2active {
    #ind2 {
      background-color: $ColorText;
    }
  }

  .banner3active {
    #ind3 {
      background-color: $ColorText;
    }
  }

  .banner4active {
    #ind4 {
      background-color: $ColorText;
    }
  }
}
</style>
