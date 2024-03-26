<script>

export default {
    name: 'AppHeader',

}


</script>

<template>
    <header>
        <nav>
            <div class="container flex_container">
                <div class="gender_option d_flex">
                    <ul class="gender_list">
                        <li>
                            <a href="#" class="gender woman">Donna</a>
                        </li>
                        <li>
                            <a href="#" class="gender man">Uomo</a>
                        </li>
                        <li>
                            <a href="#" class="gender kids">Bambini</a>
                        </li>

                    </ul>
                </div>
                <div class="logo d_flex">
                    <img src="/images/boolean-logo.png" alt="" height="20">
                </div>
                <div class="navigation_icon d_flex">
                    <i class="fa-regular fa-user"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
            </div>
        </nav>

    </header>
</template>

<style lang="scss"></style>