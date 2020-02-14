<template>
    <section class="hero-image">
        <div class="container">
            <h1 class="heading">{{ 'HeroImageMyName' | translateElement($lang) }}</h1>
            <p>{{ 'HeroImageMyProfession' | translateElement($lang) }}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "HeroImage"
    }
</script>

<style scoped>
    .hero-image {
        position: relative;
        padding-top: 12rem;
        height: 100vh;
    }

    .hero-image .container {
        display: flex;
        flex-direction: column;
    }

    .hero-image::before {
        position: absolute;
        content: "";
        top: 3rem;
        left: 35vw;
        width: 63.5vw;
        height: 800px;
        background-image: url("../assets/img/hero-image.svg");
        background-repeat: no-repeat;
    }

    .hero-image::after {
        position: absolute;
        content: "";
        height: 10rem;
        width: 100%;
        bottom: 0;
        background-color: #0b0c23;
        background-image: url("../assets/img/bg-tags.svg");
        background-position: center;
        background-repeat: no-repeat;
        border-top: 2px solid #5053a8;
    }

    .heading {
        z-index: 1;
        margin: 0;
        max-width: 55vw;
        font-size: 4rem;
        line-height: 6rem;
        font-weight: 500;
    }

    .hero-image p {
        z-index: 1;

        max-width: 45vw;
        margin: 0;
        padding: 2rem 0 1rem;
        font-size: 2rem;
        line-height: 4rem;
        color: #f9dd79;
    }
</style>