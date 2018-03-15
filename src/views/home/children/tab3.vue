<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">option A</mt-tab-item>
      <mt-tab-item id="2">option B</mt-tab-item>
      <mt-tab-item id="3">option C</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" class="p-t-50">
      <mt-tab-container-item id="1">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
          <mt-cell :key="n" v-for="n in 10" :title="'content ' + n" />
        </mt-loadmore>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell :key="n" v-for="n in 4" :title="'content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell :key="n" v-for="n in 6" :title="'content ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [1, 2, 3],
        selected: '1',
        allLoaded: false,
      }
    },
    methods: {
      loadTop() {
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded();
        }, 1500)
      },
      loadBottom() {
        setTimeout(() => {
          this.$refs.loadmore.onBottomLoaded();
        }, 1500)
      },
    },
    mounted() {},
    components: {},
  }
</script>

<style>
</style>