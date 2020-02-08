<template>
    <div id="app">
        <MainTemplate>
            <div id="content">
                <HeroImage></HeroImage>
                <Intro></Intro>
                <Abilities></Abilities>
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
    import Abilities from '@/components/Abilities'

    export default {
        name: 'app',
        components: {
            MainTemplate,
            HeroImage,
            Intro,
            Portfolio,
            Abilities
        }
    }
</script>

<style>
    html {
        font-size: 18px;
    }

    body {
        position: relative;
        margin: 30px 0 0;
        min-width: 300px;
        font-family: "Montserrat", "Helvetica", "Arial", sans-serif;
        line-height: 2rem;
        color: #f2f2f2;
        background-color: #141530;
        background-image: url("assets/img/pattern-lines-hero.svg");
        background-position: center;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
    }

    .subheading {
        margin: 0 0 6rem;
        padding: 0;

        text-align: center;
        font-size: 4rem;
        line-height: 5rem;
        font-weight: 500;
        color: #f9dd79;
    }

    .button {
        margin: 0;
        padding: 0.33rem 1.1rem;
        display: inline-block;
        vertical-align: baseline;
        font-size: 1rem;
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

    @media (max-width: 1180px) {
        html {
            font-size: 14px;
        }
    }

    @media (max-width: 600px) {
        html {
            font-size: 11px;
        }
    }
</style>
