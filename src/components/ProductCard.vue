<script>

import { state } from '../state.js'

export default {
    name: 'ProductCard',
    props: {
        product: Object,
    },

    data() {
        return {
            state,
            activeModal: false,
        }
    },

    methods: {
        likeToggle() {
            this.product.liked = !this.product.liked
        },

        modalToggle() {
            this.activeModal = !this.activeModal
        }



    }
}

</script>

<template>
    <!-- CARD -->
    <div class="card" @click="modalToggle">
        <div class="product_image">
            <div class="image_box">
                <img class="item" :src="product.firstImage" alt="">
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

    <!-- Modale -->

    <div class="modal" v-if="activeModal == true">
        <div class="modal_product_details">
            <div>{{ product.productName }}</div>
            <div>{{ product.brand }}</div>
        </div>
        <button class="close_modal" @click="modalToggle">&#10005</button>
    </div>

</template>

<style lang="scss">
.like {
    color: black;
}

.like.red_like {
    color: red;
}

// Model

.modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    .modal_product_details {
        background-color: antiquewhite;
        padding: 3rem;
        border-radius: 2rem;
    }

    .close_modal {
        background-color: antiquewhite;
        padding: 0.2rem;
        position: absolute;
        top: 4rem;
        right: 1rem;
        border-radius: 7px;
        border: 2px ridge;
    }
}
</style>