<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import ProductCard from './components/ProductCard.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,
    AppFooter,
    ProductCard,

  }
}

</script>

<template>

  <AppHeader />

  <AppMain />

  <ProductCard />

  <AppFooter />

</template>

<style lang="scss"></style>
