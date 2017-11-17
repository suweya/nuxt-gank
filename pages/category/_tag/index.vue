<template>
  <div>
    <Card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 32px 0">
      Content {{ item }}
    </Card>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route)
  },
  computed: {
    tag: function() {
      return this.$route.params.tag
    }
  },
  data() {
    return {
      list1: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    }
  },
  methods: {
    handleReachBottom() {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list1[this.list1.length - 1]
          for (let i = 1; i < 11; i++) {
            this.list1.push(last + i)
          }
          resolve()
        }, 2000)
      })
    }
  }
}
</script>
