<template>
  <div>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="../../images/1.png"> tab1
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../../images/2.png"> tab2
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../../images/3.png"> tab3
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../../images/4.png"> tab4
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui';
  import {
    Indicator
  } from 'mint-ui';
  import {
    MessageBox
  } from 'mint-ui';

  export default {
    data() {
      return {
        selected: null,
      }
    },
    created() {
      this.selected = this.$route.name
    },
    mounted() {
      Toast({
        message: 'Upload Complete',
        position: 'bottom',
        duration: 5000
      });

      Indicator.open('Loading...')

      MessageBox({
        title: 'Notice',
        message: 'Are you sure?',
        showCancelButton: true
      })
    },
    methods: {},
    watch: {
      $route(to, from) {
        this.selected = to.name
      },
      selected(val, oldVal) {
        switch (val) {
          case 'tab1':
            this.$router.push({
              path: '/home/tab1'
            })
            break
          case 'tab2':
            this.$router.push({
              path: '/home/tab2'
            })
            break
          case 'tab3':
            this.$router.push({
              path: '/home/tab3'
            })
            break
          case 'tab4':
            this.$router.push({
              path: '/home/tab4'
            })
            break

        }
      }
    },
    components: {},
  }
</script>

<style>
</style>