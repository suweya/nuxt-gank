<template>
  <div class="layout">
    <nav class="navbar navbar-expand-md toolbar">
		<a class="layout-logo" href="#">
			<img width="100px" height="30px" src="http://gank.io/static/images/special/work.png" alt="收心工作啦">
		</a>
		
		<Dropdown trigger="click" class="btn-more" placement="bottom-end" @on-click="select">
			<a href="javascript:void(0)">
				<Icon type="android-more-horizontal" size="28"></Icon>
			</a>
			<DropdownMenu slot="list">
				<DropdownItem name="/category/fe">前端</DropdownItem>
				<DropdownItem name="/category/android">Android</DropdownItem>
				<DropdownItem name="/category/ios">iOS</DropdownItem>
				<DropdownItem name="/category/all">ALL</DropdownItem>
				<DropdownItem name="/timeline">TimeLine</DropdownItem>
			</DropdownMenu>
		</Dropdown>
		
		<div class="nav-title">
		  <span>{{ $store.state.currentTab | formateTag }}</span>
		</div>
		
		<div class="navbar-collapse" id="navbarsExampleDefault">
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
		</div>
	</nav>
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
        this.$router.push(name)
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
    position: absolute;
	top: 12.5px;
	left: 20px;
  }

  .layout-nav {
    width: 460px;
	margin: 0 auto;
	font-size: 14px;
	color: #495060;
	height: 60px;
	line-height: 60px;
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
  
  .toolbar {
		padding: 0;
		background-color: white;
		height: 60px;
	}
	
	.toolbar:after {
		content: "";
		display: block;
		background: #dddee1;
		width: 100%;
		height: 1px;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	
	.fixed-top {
	  position: fixed;
	  top: 0;
	  right: 0;
	  left: 0;
	  z-index: 1030;
	}
	
	.navbar-collapse {
	  display: block;
	  position: relative;
	}
	
	.btn-more {
	  display: none;
	  position: absolute;
	  top: 15px;
	  right: 15px;
	}
	
	.nav-title {
	  display: none;
	  height: 60px;
	  line-height: 60px;
	  text-align: center;
	  color: #2d8cf0;
	  font-size: 16px;
	}
	
	@media (max-width: 768px) {
	  .btn-more {
		display: inline-block;
	  }
	  
	  .navbar-collapse {
		display: none;
	  }
	  
	  .nav-title {
	    display: block;
	  }
	}
</style>