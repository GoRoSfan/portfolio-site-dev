<template>
    <li>
        <div :style="{backgroundImage: 'url(' + desireImage + ')'}"></div>
        <h4>{{desireTitle | translateElement($lang)}}</h4>
        <ul>
            <Skill v-for="(skill, index) in skillList"
                   :key="index"
                   :skill-title="skill.title"
                   :skill-image="skill.image"
            />
        </ul>
    </li>
</template>

<script>
    import Skill from './Skill'

    export default {
        name: "Desire",
        components: {
            Skill
        },
        props: ['desireTitle', 'desireImage', 'skillList']
    }
</script>

<style scoped>
    .custom-desires > li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 22rem;
        margin-right: 4rem;
        margin-bottom: 4rem;
    }

    li:last-child {
        margin-right: 0;
    }

    div {
        width: 11rem;
        height: 11rem;

        border-radius: 50%;
        border: #000000 solid 2px;

        background-repeat: no-repeat;
        background-position: center;
        background-size: 70%;
    }

    .custom-desires li:nth-child(1) div {
        background-color: #ff332e;
    }

    .custom-desires li:nth-child(2) div {
        background-color: #71ff4c;
    }

    .custom-desires li:nth-child(3) div {
        background-color: #4096ff;
    }
    
    h4{
        text-align: center;
        font-size: 1.5rem;
    }

    .custom-desires ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: baseline;

        width: 90%;
    }


    @media (max-width: 650px) {
        .custom-desires > li {
            margin-right: 0;
        }
    }
</style>