<template>
  <div id="navbar-container">
    <ul>
      <router-link v-for="tab in tabs" v-on:click.native="handleClick(tab)" :to="tab.path">
        <li :id="tab.title" class="tab" :class="{selected: tab.selected}"><span>{{tab.title}}</span></li>
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

//----------mobile styles----------
@media only screen and (max-width: 1068px) {
  #navbar-container {
    position: fixed;
    top: 0px;
    //background-color: $ColorPrimary;
    width: 100%;
    height: $NavHeight - 15px;
    line-height: $NavHeight;
    padding: 0px 0px 0px 0px;
    z-index: 10;
    background-color: $ColorGlobalBackground;
    box-shadow: 0px 10px 25px 25px $ColorGlobalBackground;

    ul {
      display: inline-flex;
      list-style: none;
      margin: 0px;
      padding: 0px;

      li {
        margin: 0px 0px 0px 0px;
        padding: 0px 15px 0px 15px;
        border-radius: $Rounded;
        transition: 150ms;
      }

      .tab {
        span {
          opacity: 0.5;
        }

        &:hover {
          span {
            opacity: 1;
          }
        }
      }
    }

    a {
      text-decoration: none;
      outline: 0;

      span {
        font-size: 11px;
        font-weight: normal;
        padding: 0px 0px 10px 0px;
        color: $ColorText;
        transition: 150ms;
      }
    }

    .selected {
      span {
        //border-bottom: solid $IndicatorHeight $ColorText;
        opacity: 1 !important;
        font-weight: bolder;
      }
    }
  }
}

//----------tablet styles----------
@media only screen and (min-width: 1068px) {
  #navbar-container {
    position: fixed;
    top: 0px;
    //background-color: $ColorPrimary;
    width: 100%;
    height: $NavHeight;
    line-height: $NavHeight;
    padding: 10px 0px 0px 0px;
    z-index: 10;
    //box-shadow: inset 0px 45px 40px -20px rgba(0,0,0,0.2);

    ul {
      display: inline-flex;
      list-style: none;
      margin: 0px;
      float: right;
      padding: 40px 100px 0px 0px;

      li {
        margin: 0px 5px 0px 0px;
        padding: 0px 15px 0px 15px;
        border-radius: $Rounded;
        transition: 150ms;
      }

      .tab {
        span {
          opacity: 0.5;
        }

        &:hover {
          span {
            opacity: 1;
          }
        }
      }
    }

    a {
      text-decoration: none;
      outline: 0;

      span {
        font-size: $NavFontSize;
        font-weight: normal;
        padding: 0px 0px 10px 0px;
        color: $ColorText;
        transition: 150ms;
      }
    }

    .selected {
      span {
        //border-bottom: solid $IndicatorHeight $ColorText;
        opacity: 1 !important;
        font-weight: bolder;
      }
    }
  }
}

//----------desktop styles----------
@media only screen and (min-width: 1669px) {
  #navbar-container {
    position: fixed;
    top: 0px;
    //background-color: $ColorPrimary;
    width: 100%;
    height: $NavHeight;
    line-height: $NavHeight;
    padding: 10px 0px 0px 0px;
    z-index: 10;
    //box-shadow: inset 0px 45px 40px -20px rgba(0,0,0,0.2);

    ul {
      display: inline-flex;
      list-style: none;
      margin: 0px;
      float: right;
      padding: 40px 200px 0px 0px;

      li {
        margin: 0px 5px 0px 0px;
        padding: 0px 15px 0px 15px;
        border-radius: $Rounded;
        transition: 150ms;
      }

      .tab {
        span {
          opacity: 0.5;
        }

        &:hover {
          span {
            opacity: 1;
          }
        }
      }
    }

    a {
      text-decoration: none;
      outline: 0;

      span {
        font-size: $NavFontSize;
        font-weight: normal;
        padding: 0px 0px 10px 0px;
        color: $ColorText;
        transition: 150ms;
      }
    }

    .selected {
      span {
        //border-bottom: solid $IndicatorHeight $ColorText;
        opacity: 1 !important;
        font-weight: bolder;
      }
    }
  }
}
</style>
