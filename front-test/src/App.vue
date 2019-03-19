<template>
  <div id="app">
    <Pages/>
  </div>
</template>

<script>

import Pages from './pages/pages'

export default {
  name: 'app',
  components: {
    Pages
  },
}
</script>

<style lang="scss" src="./scss/style.scss">
body { 
  margin: 0 !important; 
}
</style>
