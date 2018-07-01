<template>
  <div id="contact-container">
    <div id="contact-container-inner">
      <div id="contact-container-phone">
        <h2>Give me a call.</h2>
        <p>636-515-1293</p>
        <h2>Shoot me an email.</h2>
        <a href="#"><p>tbrew1023@gmail.com</p></a>
        <h2>Send me a letter :)</h2>
        <p>525 S State St, Chicago, IL 60605</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

#contact-container {
  position: absolute;
  background-color: #FF8F00;
  width: 100vw;
  height: 100vh;
  color: $ColorWhite;
}

#contact-container-inner {
  margin: 270px 0px 0px 0px;
  text-align: left;
  margin-left: 300px;
  width: 500px;
}

h2 {
  font-weight: bold;
  font-size: 36px;
  margin: 0px;
  padding: 0px;
  //opacity: 0.9;
}

p {
  padding: 0px;
  margin: 0px 0px 60px 0px;
  color: $ColorWhite;
  opacity: 0.6;
}

a {
  text-decoration: none;

  p {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
