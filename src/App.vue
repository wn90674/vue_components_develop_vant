<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <test-component>
      测试
    </test-component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TestComponent from '../package/my-button/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TestComponent,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
