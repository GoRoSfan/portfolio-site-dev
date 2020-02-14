<template>
    <li>
        <figure class="project-item">
            <figcaption>{{projectTitle | translateElement($lang)}}</figcaption>
            <img :src="projectImage" :alt="projectTitle">
            <a :href="projectLink" class="button" target="blank">Open</a>
        </figure>
    </li>
</template>

<script>
    export default {
        name: "Project",

        props: ['projectTitle', 'projectImage', 'projectLink']
    }
</script>

<style scoped>
    li {
        margin-bottom: 4rem;
    }

    li:last-child {
        margin-bottom: 0;
    }

    .project-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 0;
        padding: 0;
    }

    .project-item figcaption {
        margin: 0 0 1rem;

        text-align: center;
        font-size: 2rem;
        line-height: 3rem;
        font-weight: 500;
    }

    .project-item img {
        width: 95%;
        margin-bottom: 3rem;
    }
</style>