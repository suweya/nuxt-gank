<template>
  <div class="layout">
    <Menu mode="horizontal" theme="light" @on-select="select">
      <div class="layout-logo">
        <img width="100px" height="30px" src="http://gank.io/static/images/special/work.png" alt="收心工作啦">
      </div>
      <div class="layout-nav">
        <nuxt-link to="/category/fe" class="nav-item">
          <Icon type="ios-navigate"></Icon>
          前端
        </nuxt-link>
        <nuxt-link to="/category/android" class="nav-item">
          <Icon type="ios-keypad"></Icon>
          Android
        </nuxt-link>
        <nuxt-link to="/category/ios" class="nav-item">
          <Icon type="ios-analytics"></Icon>
          iOS
        </nuxt-link>
        <nuxt-link to="/category/all" class="nav-item">
          <Icon type="ios-paper"></Icon>
          ALL
        </nuxt-link>
        <nuxt-link to="/timeline" class="nav-item">
          <Icon type="android-time"></Icon>
          TimeLine
        </nuxt-link>
      </div>
    </Menu>
    <div class="layout-content">
      <nuxt/>
    </div>
    <div class="layout-copy">
      2017 &copy; GANK.IO
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'this.$store.state.currentTab'
      }
    },
    methods: {
      select(name) {
        console.log(name)
      }
    }
  }
</script>

<style scoped>
  .nav-item {
    display: inline-block;
    padding: 0 20px;
    color: #495060;
    border-bottom: 2px solid transparent;
  }

  .nav-item:hover,
  .nuxt-link-exact-active {
    border-bottom: 2px solid #2d8cf0;
    color: #2d8cf0;
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    height: 100%;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    /* background: #5b6270; */
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    line-height: 30px;
    overflow: hidden;
  }

  .layout-nav {
    width: 525px;
    margin: 0 auto;
  }

  .layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    height: calc(100% - 140px);
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
</style>