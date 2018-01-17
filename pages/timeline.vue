<template>
  <div class="root">
    <div class="left-content">
      <div class="time-line">
        <Timeline>
          <TimelineItem v-for="(item, index) in timelines" :key="index">
              <p class="time" :class="{active: tag == item}" @click="goto(item)">{{ item }}</p>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
    <div class="right-content">
      <div class="day-content" v-for="(value, key, index) in dayData" :key="index">
        <p>{{ key }}</p>
        <Card dis-hover v-for="(item, idx) in value" :key="idx" style="margin: 15px 0">
          <a :href="item.url" target="_blank">{{ item.desc }}</a>
          <p>{{ item.who }}</p>
          <p>{{ item.publishedAt | formatDate('yyyy-MM-dd HH:mm:ss') }}</p>
          <div class="img-content" v-if="item.images">
            <a :href="img" target="_blank" v-for="(img, imgIndex) in item.images" :key="imgIndex">
              <img :src="img | formateImgSize(240)" alt="">
            </a>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TimeLine',
  layout: 'nested',
  async asyncData({ error }) {
    let response
    try {
      response = await axios.get('http://gank.io/api/day/history')
    } catch (err) {
      error({ statusCode: 500, message: `Fetch timeline data error` })
      console.error(`Init timeline data error stract :`, err)
      return {}
    }
    const dateList = response.data.results

    let dayResponse
    let defaultItem
    if (dateList && dateList.length) {
      defaultItem = dateList[0]
      let params = defaultItem.split('-')

      try {
        dayResponse = await axios.get(`http://gank.io/api/day/${params[0]}/${params[1]}/${params[2]}`)
      } catch (err) {
        error({ statusCode: 500, message: `Fetch timeline data error` })
        console.error(`Init timeline data error stract :`, err)
        return {}
      }
    }

    // console.log('DAY_RES ', dayResponse)
    return {
      timelines: dateList,
      dayData: dayResponse.data.results,
      tag: defaultItem
    }
  },
  data() {
    return {
      timelines: [],
      dayData: {},
      tag: ''
    }
  },
  methods: {
    goto(item) {
      this.fetchData(item)
    },
    async fetchData(item) {
      let dayResponse
      let params = item.split('-')

      try {
        dayResponse = await axios.get(`http://gank.io/api/day/${params[0]}/${params[1]}/${params[2]}`)
      } catch (err) {
        console.error(`Get timeline data error stract :`, err)
      }

      this.dayData = dayResponse.data.results
      this.tag = item
    }
  }
}
</script>

<style scoped>
.root {
  display: flex;
  height: 100%;
}

.left-content {
  /* border-right: 10px solid #f5f7f9; */
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

.right-content {
  flex: 1;
  overflow-y: auto;
}

.time-line {
  padding: 25px;
}

.time {
  font-size: 14px;
  font-weight: bold;
  color: #2d8cf0;
  cursor: pointer;
}

.time:hover {
  color: #3dfff0;
}

.day-content {
  padding: 10px 20px 0 20px;
}

.active {
  color: #d6474b;
}
</style>

