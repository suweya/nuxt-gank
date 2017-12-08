<template>
  <div class="root">
    <div class="left-content">
      <div class="time-line">
        <Timeline>
          <TimelineItem v-for="(item, index) in timelines" :key="index">
              <p class="time">{{ item }}</p>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
    <div class="right-content">

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
    console.log('Timeline = ', response)
    return {
      timelines: response.data.results
    }
  },
  data() {
    return {
      timelines: []
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
</style>

