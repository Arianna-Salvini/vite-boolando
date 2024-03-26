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
    <div class="card">
        <div class="product_image">
            <div class="image_box">
                <img class="item" :src="product.firstImage" alt="">
                <img class="item_b" :src="product.secondImage" alt="">
            </div>
            <div class="label_position">
                <span class="discount" v-if="product.discount !== null">{{ product.discount }}</span>
                <span class="spacial_label" v-if="product.specialLabel !== null">{{ product.specialLabel }}</span>
            </div>
            <div class="like" @click.stop="likeToggle" :class="{ red_like: product.liked }">&hearts;</div>
        </div>
        <div class="product_description">
            <div class="brand">{{ product.brand }}'s</div>
            <strong class="product_name" @click="modalToggle">{{ product.productName }}</strong>
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
            <div class="left">
                <img :src="product.firstImage" alt="">
                <img :src="product.secondImage" alt="">
            </div>
            <div class="right">
                <strong>{{ product.productName }}</strong>
                <div class="py">{{ product.brand }}</div>
                <div class="spacial_label py" v-if="product.specialLabel !== null">{{ product.specialLabel }}
                </div>
                <div class="discount py" v-if="product.discount !== null">{{ product.discount }}</div>
                <div class="price">
                    <div class="product_price " :class="{ bar_price: product.price.discountedPrice !== null }">
                        {{ product.price.originalPrice }}€
                    </div>

                    <div class="discount_price red" v-if="product.price.discountedPrice !== null">
                        {{ product.price.discountedPrice }}€
                    </div>
                </div>


            </div>
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
.py {
    padding-bottom: 0.8rem;
}

.modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    .modal_product_details {
        max-width: 90%;
        max-height: 90%;
        background-color: antiquewhite;
        padding: 3rem;
        border-radius: 2rem;
        display: flex;

        .left,
        .right {
            width: 50%;
        }

        & img {
            max-width: calc((100%/2) - 1rem);
            margin: 0.5rem;
            box-shadow: 1px 1px 10px gray;
        }

        .right {
            display: flex;
            flex-direction: column;
            margin: 2rem;
            align-items: flex-start;
        }
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