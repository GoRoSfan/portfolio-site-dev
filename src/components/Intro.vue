<template>
    <section class="intro">
        <div class="container">
            <h2 class="subheading">Introduction (Давайте познакомимся)</h2>
            <figure class="user-image">
                <img src="../assets/files/user.jpg" alt="Photo of my face">
            </figure>

            <section>
                <h3>About myself (Пара слов о себе)</h3>
                <p>
                    I am a Web Developer. Programming is very excited me.
                    <br>
                    Because computer programs can turn over whole world (and I want to develop one).
                </p>
                <p>
                    Я веб-разработчик. Программирование очень взволновало меня.
                    <br>
                    Потому что компьютерные программы могут перевернуть весь мир (и я хочу разработать такую).
                </p>
            </section>
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
        background-color: #141530;
        background-image: url("../assets/img/pattern-lines.svg");
        background-repeat: repeat-y;
        background-position-x: center;
    }

    .intro {
        padding-top: 160px;
        padding-bottom: 120px;
        min-height: 600px;
    }

    .subheading {
        margin: 0 0 100px;
        text-align: center;
        font-size: 72px;
        line-height: 88px;
        font-weight: 500;
        color: #f9dd79;
    }

    .intro .container {
        position: relative;
    }

    .user-image {
        position: absolute;
        margin: 0;
    }

    .user-image img {
        height: 500px;
        object-fit: cover;
    }

    .intro .container section {
        margin-left: 720px;
        margin-bottom: 56px;
    }

    .intro h3 {
        margin: 0 0 16px;
        font-size: 32px;
        line-height: 40px;
        font-weight: 500;
    }

    .intro p {
        margin: 0;
        z-index: 2;
    }
</style>