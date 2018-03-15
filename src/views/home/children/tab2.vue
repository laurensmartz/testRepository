<template>
  <div>
    <mt-search v-model="value">
      <mt-cell :key="index" v-for="(item, index) in result" :title="item.title" :value="item.value">
      </mt-cell>
    </mt-search>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '搜你想搜',
        result: [{
          title: 'title1',
          value: 'value1'
        }],
      }
    },
    methods: {},
    mounted() {},
    components: {},
  }
</script>

<style>
</style>