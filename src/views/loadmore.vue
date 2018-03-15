<template>
  <div>
    <!-- header -->
    <mt-header fixed title="fixed top">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- load more -->
    <mt-loadmore class="p-t-50" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <mt-cell title="标题文字" value="说明文字" :key="index" v-for="(item, index) in list"></mt-cell>
    </mt-loadmore>
    <!-- tab bar -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="../images/1.png"> tab1
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../images/2.png"> tab2
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../images/3.png"> tab3
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../images/4.png"> tab4
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [1, 2, 3],
        allLoaded: false,
        selected: 'tab1'
      }
    },
    methods: {
      test() {
        alert('click')
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 0);
      },
      loadTop() {
        console.log('loadTop')
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded();
        }, 2000)
      },
      loadBottom() {
        console.log('loadBottom')
        setTimeout(() => {
          this.$refs.loadmore.onBottomLoaded()
        }, 1500)
      },
    }
  }
</script>

<style>
</style>