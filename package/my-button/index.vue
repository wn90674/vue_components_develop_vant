<template>
  <div class="button">
    <button @click="onClick">
      <slot />
    </button>
  </div>
</template>
<script>
export default {
  name: 'my-button',
  props: {
    text: {
      type: String,
      default: '按钮',
    },
  },
  methods: {
    onClick() {
      console.log('click');
      window.alert('click');
      this.$emit('click');
    },
  },
};
</script>

<style>
@import url('./style/index.css');
</style>
