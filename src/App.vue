<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import ProductCars from './components/ProductCard.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,
    AppFooter,
    ProdoctCard,

  }
}

</script>

<template>

  <AppHeader />

  <AppMain />

  <AppFooter />

</template>

<style lang="scss"></style>
