<template>
    <section class="intro">
        <div class="container">
            <h2 class="subheading">Introduction (Давайте познакомимся)</h2>
            <figure class="user-image">
                <img src="../assets/files/user.jpg" height="600" alt="Photo of my face">
            </figure>

            <div>
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
            </div>

            <div>
                <h3>I can help with (Чем могу быть полезен):</h3>
                <ul class="custom_desires">
                    <li>
                        <figure>
                            <img src="../assets/img/preferences-desktop-wallpaper.svg">
                        </figure>
                        <h4>Site layout</h4>
                    </li>
                    <li>
                        <figure>
                            <img src="../assets/img/www.svg">
                        </figure>
                        <h4>Develop site</h4>
                    </li>
                    <li>
                        <figure>
                            <img src="../assets/img/union.svg">
                        </figure>
                        <h4>Help with Site logic</h4>
                    </li>
                </ul>
                <ul>
                    <li><h4>Верстка сайта</h4></li>
                    <li>
                        <h4>Разработка сайта</h4>
                        <ul>
                            <li>Клиент-сервер</li>
                            <li>Бекенд-сервер</li>
                        </ul>
                    </li>
                    <li><h4>Помощь с логикой сайта</h4></li>
                </ul>
            </div>

            <div class="skills">
                <h3>My skills (Мои навыки)</h3>
                <dl class="skills-list">
                    <dt class="skill-html">HTML</dt>
                    <dd class="level"><div style="width: 60%"></div></dd>
                    <dt class="skill-css">CSS</dt>
                    <dd class="level"><div style="width: 50%"></div></dd>
                </dl>
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
        background-color: #141530;
        background-image: url("../assets/img/pattern-lines.svg");
        background-repeat: repeat-y;
        background-position-x: center;
    }

    .intro {
        padding-top: 160px;
        padding-bottom: 120px;
        min-height: 828px;
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
        width: 640px;
        height: 640px;
        object-fit: cover;
    }

    .intro .container div {
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

    .custom_desires{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        list-style: none;
    }

    .custom_desires figure {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
        border: #000000 solid 2px;
    }

    .custom_desires li:nth-child(1) figure {
        background-color: #ff332e;
    }

    .custom_desires li:nth-child(2) figure {
        background-color: #71ff4c;
    }

    .custom_desires li:nth-child(3) figure {
        background-color: #4096ff;
    }

    .custom_desires img {
        display: block;
        width: 75px;
        height: 75px;
        vertical-align: center;
    }

    .skills {
        margin-bottom: 0;
    }

    .skills h3 {
        margin-bottom: 40px;
    }

    .skills-list {
        margin: 0;
        padding: 0;
    }

    .skills-list dt {
        margin: 0 0 8px;
        padding-left: 46px;
        height: 36px;
        font-size: 24px;
        letter-spacing: 1px;
        background-repeat: no-repeat;
        background-position: left;
    }

    .skill-html {
        background-image: url("../assets/img/icon-html.svg");
    }

    .skill-css {
        background-image: url("../assets/img/icon-css.svg");
    }

    .level {
        margin: 0 0 40px;
        height: 24px;
        text-align: right;
        background-color: #0b0c23;
        box-shadow: inset 0 0 12px #070716;
        border-radius: 12px;
        overflow: hidden;
    }

    .skills .level div {
        margin: 0;
        height: 24px;
        letter-spacing: 1px;
        line-height: 26px;
        background-color: #5053a8;
        background-image: url("../assets/img/progress-pattern.svg");
    }
</style>