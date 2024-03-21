<script>

export default {
    name: 'AppHeader'
}

</script>

<template>
    <header>
        <nav>
            <div class="container flex_container">
                <div class="gender_option">
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
                <div class="logo">
                    <img src="/images/boolean-logo.png" alt="" height="20">
                </div>
                <div class="navigation_icon">
                    <i class="fa-regular fa-user"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
            </div>
        </nav>

    </header>
</template>

<style lang="scss">
header {
    background-color: var(&bz-primary);
    height: 3rem;

    & nav {
        color: var(&bz-light);
        background-color: var(&bz-primary);
        height: 3rem;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        width: 100%;
        z-index: 9999;
    }

    .gender_option,
    .navigation_icon {
        width: 33%;
    }

    .logo {
        width: 34%;
    }

    .gender_list {
        list-style: none;
        display: flex;
        justify-content: center;
    }

    .gender {
        color: var(--bz-light);
        font-size: 0.9rem;
        padding: 0.3rem;
        text-decoration: none;
    }

}
</style>