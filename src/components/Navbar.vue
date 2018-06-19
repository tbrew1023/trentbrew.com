<template>
  <div id="navbar-container">
    <ul>
      <router-link v-for="tab in tabs" v-on:click.native="handleClick(tab)" :to="tab.path">
        <li :class="{selected: tab.selected}"><span>{{tab.title}}</span></li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      tabs: [
        {
          title: 'Home',
          path: '/',
          selected: true
        },
        {
          title: 'Portfolio',
          path: '/portfolio',
          selected: false
        },
        {
          title: 'Resume',
          path: '/resume',
          selected: false
        },
        {
          title: 'Contact',
          path: '/contact',
          selected: false
        }
      ]
    }
  },
  methods: {
    handleClick(tab) {
      for(let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].selected = false;
      }
      tab.selected = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

#navbar-container {
  position: fixed;
  top: 0px;
  //background-color: $ColorPrimary;
  width: 100%;
  height: $NavHeight;
  line-height: $NavHeight;
  margin: 10px 0px 0px 0px;
  z-index: 10;

  ul {
    display: inline-flex;
    list-style: none;
    margin: 0px;
    padding: 0px 0px 0px 30px;

    li {
      margin: 0px 5px 0px 0px;
      padding: 0px 15px 0px 15px;
      border-radius: $Rounded;
      transition: 150ms;

      &:hover {
        //background-color: $ColorDarken;
        span {
          color: $ColorLightGray;
        }
      }
    }
  }

  a {
    text-decoration: none;
    outline: 0;

    span {
      font-size: $NavFontSize;
      padding: 0px 0px 10px 0px;
      color: $ColorLightGray;
      transition: 150ms;
    }
  }

  .selected {
    span {
      border-bottom: solid $IndicatorHeight $ColorLightGray;
    }
  }
}
</style>
