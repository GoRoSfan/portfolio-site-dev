<template>
    <section class="portfolio">
        <div class="container">
            <h2 class="subheading">My projects (мои работы)</h2>
            <ul class="projects">
                <li>
                    <figure class="project-image">
                        <img src="../assets/files/portfolio_centre.png" width="1000" alt="Site of Educational Center">
                    </figure>
                    <h3>Site of Educational Center</h3>
                    <a href="#" class="button">Open (Открыть)</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Portfolio"
    }
</script>

<style scoped>
    .portfolio {
        margin: 0;
        padding-bottom: 160px;

        background-color: #141530;
        background-image: url("../assets/img/pattern-lines.svg");
        background-repeat: repeat-y;
        background-position-x: center;
    }

    .portfolio h3 {
        margin: 0 0 16px;
        font-size: 32px;
        line-height: 40px;
        font-weight: 500;
    }

    .projects {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .projects li {
        position: relative;
        min-height: 256px;
        margin: 0 0 100px;
        padding-left: 528px;
    }

    .project-image {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
    }

    .project-image img {
        width: 448px;
        height: 256px;
        object-fit: cover;
    }

    .projects p {
        margin: 0 0 32px;
    }
</style>