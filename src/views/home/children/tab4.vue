<template>
  <div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <mt-button size="small">small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button size="normal">normal</mt-button>
    <mt-cell title="标题文字" to="/home/tab1" is-link value="带链接"></mt-cell>
    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
    <mt-cell title="标题文字">
      <span>这里</span>
      <img slot="icon" src="../../../images/1.png" width="24" height="24">
    </mt-cell>
    <mt-cell-swipe title="text" :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
    ]">
    </mt-cell-swipe>
    <mt-spinner type="snake" color="blue" :size="60"></mt-spinner>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    mounted() {},
    components: {},
  }
</script>

<style>
</style>