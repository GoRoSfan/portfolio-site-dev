<template>
    <section class="hero-image">
        <div class="container">
            <h1 class="heading">
                Sinilo Oleg (Олег Синило)
            </h1>
            <p>Full Stack Developer (Full Stack Разработчик)</p>
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
        padding-top: 200px;
        height: 798px;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: 48px;
    }

    .hero-image .container {
        display: flex;
        flex-direction: column;
    }

    .hero-image::before {
        position: absolute;
        content: "";
        top: 24px;
        left: calc(50vw - 32px);
        width: 800px;
        height: 800px;
        background-image: url("../assets/img/hero-image.svg");
        background-repeat: no-repeat;
    }

    .hero-image::after {
        position: absolute;
        content: "";
        height: 200px;
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
        order: 2;
        margin: 0 0 0 -10px;
        width: 815px;
        font-size: 96px;
        line-height: 112px;
        font-weight: 500;
    }

    .hero-image p {
        z-index: 1;
        order: 1;
        margin: 0;
        padding: 32px 0;
        padding-bottom: 16px;
        font-size: 32px;
        line-height: 48px;
        color: #f9dd79;
    }
</style>