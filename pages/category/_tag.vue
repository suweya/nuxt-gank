<template>
  <div ref="content">
    <div v-if="results">
      <Card dis-hover v-for="(item, index) in results" :key="index" style="margin: 32px 0">
        <a :href="item.url" target="_blank">{{ item.desc }}</a>
        <p>{{ item.who }}</p>
        <p>{{ item.publishedAt | formatDate('yyyy-MM-dd HH:mm:ss') }}</p>
        <div :id="'gallery-' + index" class="img-content" v-if="item.images" @click="showGallery('gallery-' + index)">
          <a v-for="(img, imgIndex) in item.images" :key="imgIndex">
            <img :src="img | formateImgSize(240)" alt="">
          </a>
        </div>
      </Card>
    </div>
    <h2 class="footer" v-if="!hasmore">--- The End ---</h2>
    <div v-else-if="error">
      Error...
    </div>
    <BackTop @on-click="backTop()"></BackTop>
    <div class="spin-container" v-show="loading">
      <Spin fix></Spin>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { convertCategory, getDataURLByCategory, PAGE_COUNT } from '@/utils/common'
// import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export default {
  name: `TAG${new Date().getTime()}`,
  async asyncData({ params, error, isClient, isServer }) {
    console.log(
      `Current page ${params.tag} isClient = ${isClient} isServer = ${isServer}`
    )
    const category = convertCategory(params.tag)
    let response
    try {
      response = await axios.get(getDataURLByCategory(category, 1))
    } catch (err) {
      error({ statusCode: 500, message: `Fetch ${category} data error` })
      return { error: true }
    }
    return { page: 2, ...response.data }
  },
  scrollToTop: true,
  computed: {
    tag: function() {
      return this.$route.params.tag
    }
  },
  data() {
    return {
      page: 1,
      results: null,
      error: false,
      loading: false,
      hasmore: true
    }
  },
  methods: {
    handleScroll() {
      const body = document.body
      // 兼容IE
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop
      const clientHeight = body.clientHeight
      const scrollHeight = body.scrollHeight
      if (this.hasmore && !this.loading && scrollTop + clientHeight >= scrollHeight - 300) {
        console.log(`load more data current compoent is `, this)
        this.$data.loading = true
        this.fetchData()
      }
    },
    async fetchData() {
      const category = convertCategory(this.tag)
      this.$Message.info(`loading data for ${decodeURIComponent(this.tag)}`)
      let response
      try {
        response = await axios.get(getDataURLByCategory(category, this.page))
      } catch (err) {
        this.$Message.error(
          `${decodeURIComponent(this.tag)} load more data error`
        )
        // this.error = true
        this.loading = false
        return
      }

      this.loading = false
      const resultSize = response.data.results.length
      if (resultSize < PAGE_COUNT) {
        this.hasmore = false
      } else {
        this.page = this.page + 1
      }
      this.results = [...this.results, ...response.data.results]
    },
    backTop() {
      document.body.scrollTop = 0
    },
    showGallery(id) {
      const element = document.getElementById(id)
      // console.log(element)
      const Viewer = require('viewerjs').default
      // console.log(Viewer)
      /* eslint-disable */
      let viewer = new Viewer(element, {
        hidden: function() {
          viewer.destroy()
        }
      })
      viewer.show()
      /* eslint-enable */
    }
  },
  beforeMount() {
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    setTimeout(() => {
      document.body.scrollTop = 0
    }, 0)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.spin-container {
  display: inline-block;
  width: 100%;
  height: 35px;
  position: relative;
}
.img-content img {
  max-width: 100%;
  max-height: 350px;
}

.footer {
  text-align: center;
}
</style>