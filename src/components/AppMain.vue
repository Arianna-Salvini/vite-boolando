<script>

import { state } from '../state.js'
import ProductCard from './ProductCard.vue'

export default {
    name: 'AppMain',

    components: {
        ProductCard,
    },

    data() {
        return {
            state,
        }
    },
    mounted() {
        // console.log(state);
        // console.log(this.state);
        state.getProducts(state.products_api_url)
    },
}
</script>

<template>
    <main>
        <div class="container flex_container">

            <ProductCard :product="product" v-for="product in state.products" :key="product.id" />

        </div>
    </main>
</template>

<style lang="scss"></style>