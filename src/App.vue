<template>
    <div id="app">
        <MainTemplate>
            <div id="content">
                <HeroImage></HeroImage>
                <Intro></Intro>
                <Portfolio></Portfolio>
            </div>
        </MainTemplate>
    </div>
</template>

<script>
    import MainTemplate from './components/MainTemplate'
    import HeroImage from './components/HeroImage'
    import Intro from './components/Intro'
    import Portfolio from './components/Portfolio'

    export default {
        name: 'app',
        components: {
            MainTemplate,
            HeroImage,
            Intro,
            Portfolio
        }
    }
</script>

<style>
    body {
        position: relative;
        margin: 0;
        min-width: 1408px;
        font-family: "Montserrat", "Helvetica", "Arial", sans-serif;
        font-size: 16px;
        line-height: 32px;
        color: #f2f2f2;
        background-color: #141530;
        background-image: url("assets/img/pattern-lines-hero.svg");
        background-position: center;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        margin-top: 30px;
    }

    .button {
        margin: 0;
        padding: 8px 24px;
        display: inline-block;
        vertical-align: baseline;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
        color: #0b0c23;
        background-color: #f9dd79;
        box-shadow: 0 4px 16px rgba(249, 221, 121, 0.4);
        border-radius: 24px;
        transition: background-color 100ms, box-shadow 100ms;
    }

    .button:focus,
    .button:hover {
        background-color: #f9e7a8;
        box-shadow: 0 4px 32px rgba(249, 221, 121, 0.6);
    }

    .button:active {
        background-color: #b69e4b;
        box-shadow: none;
    }
</style>
