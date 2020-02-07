<template>
    <li>
        <figure>
            <img :src="skillImage" :alt="skillTitle + 'logo'">
            <figcaption>{{skillTitle}}</figcaption>
        </figure>
    </li>
</template>

<script>
    export default {
        name: "Skill",
        props: ['skillTitle', 'skillImage']
    }
</script>

<style scoped>
    li {
        margin-right: 30px;
    }

    li:last-child {
        margin-right: 0;
    }

    figure {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 0;
    }

    img {
        width: 50px;
    }
</style>