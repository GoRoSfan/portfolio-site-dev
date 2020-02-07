<template>
    <li>
        <div :style="{backgroundImage: 'url(' + desireImage + ')'}"></div>
        <h4>{{desireTitle}}</h4>
        <ul>
            <Skill v-for="skill in skillList"
                   :key="skill"
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
    li {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;

        width: 200px;
        margin-right: 10px;
        margin-bottom: 20px;
    }

    div {
        width: 100px;
        height: 100px;

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
    }

    .custom-desires ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: baseline;

        box-sizing: content-box;
        width: 100%;
    }
</style>