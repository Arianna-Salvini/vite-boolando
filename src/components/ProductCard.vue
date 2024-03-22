<script>

export default {
    name: 'ProductCard',
    props: {
        product: Object,
    },

    methods: {
        likeToggle() {
            this.product.liked = !this.product.liked
        }
    }
}

</script>

<template>
    <div class="card">
        <div class="product_image">
            <div class="image_box">
                <img class="item" :src="product.firstImage" alt="">
            </div>
            <div class="image_box">
                <img class="item_b" :src="product.secondImage" alt="">
            </div>
            <div class="label_position">
                <span class="discount" v-if="product.discount !== null">{{ product.discount }}</span>
                <span class="spacial_label" v-if="product.specialLabel !== null">{{ product.specialLabel }}</span>
            </div>
            <div class="like" @click="likeToggle" :class="{ red_like: product.liked }">&hearts;</div>
        </div>
        <div class="product_description">
            <div class="brand">{{ product.brand }}'s</div>
            <strong class="product_name">{{ product.productName }}</strong>
            <div class="price">
                <span class="discount_price red" v-if="product.price.discountedPrice !== null">{{
                    product.price.discountedPrice }}€</span>
                <span class="product_price " :class="{ bar_price: product.price.discountedPrice !== null }">{{
                    product.price.originalPrice }}€</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.like {
    color: black;
}

.like.red_like {
    color: red;
}
</style>