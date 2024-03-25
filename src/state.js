import { reactive } from "vue";
import axios from 'axios'

export const state = reactive({

    products: [],
    products_api_url: 'http://localhost:3000/products',

    getProducts(url) {
        axios.get(url)
            .then(response => {
                this.products = response.data
            })


    }
})