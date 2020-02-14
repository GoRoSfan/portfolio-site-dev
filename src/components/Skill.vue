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
        margin-right: 2rem;
        margin-bottom: 2rem;
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
        width: 5rem;
        margin-bottom: 1.5rem;
    }

    figcaption {
        font-weight: 700;
    }
</style>