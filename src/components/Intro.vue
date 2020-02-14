<template>
    <section class="intro">
        <div class="container">
            <h2 class="subheading">{{ 'IntroTopic' | translateElement($lang) }}</h2>
            <div class="wrapper">
                <figure class="user-image">
                    <img src="../assets/files/user.jpg" alt="Photo of my face">
                </figure>

                <section class="auth">
                    <h3>{{ 'IntroSubTopic' | translateElement($lang) }}</h3>
                    <p>
                        {{ 'IntroAuth1' | translateElement($lang) }}
                        <br>
                        {{ 'IntroAuth2' | translateElement($lang) }}
                    </p>
                </section>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: "Intro"
    }
</script>

<style scoped>

    .intro {
        padding-top: 9rem;
        padding-bottom: 5rem;
    }

    .wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }

    .user-image {
        margin: 0 3rem 3rem 0;
    }

    .user-image img {
        height: 28rem;
    }

    .auth {
        max-width: 30rem;
    }

    .intro h3 {
        margin: 0 0 1rem;
        font-size: 2rem;
        line-height: 3rem;
        font-weight: 500;
    }

    .intro p {
        margin: 0;
    }

    @media (max-width: 600px) {
        .user-image {
            margin-right: 0;
        }
    }
</style>