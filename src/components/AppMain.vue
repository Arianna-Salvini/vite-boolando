<script>

import ProductCard from './ProductCard.vue'

export default {
    name: 'AppMain',

    components: {
        ProductCard,
    },

    data() {
        return {
            products: [
                {
                    id: 1,
                    firstImage: '/images/1.webp',
                    secondImage: '/images/1b.webp',
                    discount: '-50%',
                    specialLabel: 'Sostenibile',
                    brand: 'Levi\'s',
                    productName: 'RELAXED FIT TEE UNISEX',
                    price: {
                        discountedPrice: 14.99,
                        originalPrice: 29.99,
                    }
                },
                {
                    id: 2,
                    firstImage: '/images/2.webp',
                    secondImage: '/images/2b.webp',
                    discount: '-30%',
                    specialLabel: null,
                    brand: 'Guess',
                    productName: 'ROSES TEE',
                    price: {
                        discountedPrice: 20.99,
                        originalPrice: 29.99,
                    }
                },
                {
                    id: 3,
                    firstImage: '/images/3.webp',
                    secondImage: '/images/3b.webp',
                    discount: '-30%',
                    specialLabel: null,
                    brand: 'Come Zucchero Filato',
                    productName: 'VOGLIA DI COLORI PASTELLO',
                    price: {
                        discountedPrice: 129.99,
                        originalPrice: 184.99,
                    }
                },
                {
                    id: 4,
                    firstImage: '/images/4.webp',
                    secondImage: '/images/4b.webp',
                    discount: '-50%',
                    specialLabel: 'Sostenibile',
                    brand: 'Levi\'s',
                    productName: 'TEE UNISEX',
                    price: {
                        discountedPrice: 14.99,
                        originalPrice: 29.99,
                    }
                },
                {
                    id: 5,
                    firstImage: '/images/5.webp',
                    secondImage: '/images/5b.webp',
                    discount: null,
                    specialLabel: null,
                    brand: 'Maya Deluxe',
                    productName: 'STRIPE BODICE',
                    price: {
                        discountedPrice: null,
                        originalPrice: 99.99,
                    }
                },
                {
                    id: 6,
                    firstImage: '/images/6.webp',
                    secondImage: '/images/6b.webp',
                    discount: null,
                    specialLabel: 'Sostenibile',
                    brand: 'Esprit',
                    productName: 'MAGLIONE BLACK',
                    price: {
                        discountedPrice: null,
                        originalPrice: 29.99,
                    }
                },

            ]
        }
    }
}



</script>

<template>
    <main>
        <div class="container flex_container">

            <ProductCard v-for="product in products" />

        </div>
    </main>
</template>

<style lang="scss"></style>