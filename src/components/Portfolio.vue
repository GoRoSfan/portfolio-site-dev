<template>
    <section class="portfolio">
        <div class="container">
            <h2 class="subheading">{{ 'PortfolioTopic' | translateElement($lang) }}</h2>
            <ul class="projects">
                <Project v-for="(project, index) in projects"
                         :key="index"
                         :project-title="project.title"
                         :project-image="project.image"
                         :project-link="project.link_to"
                />
            </ul>
        </div>
    </section>
</template>

<script>
    import Project from './Project';

    export default {
        name: "Portfolio",
        components: {
            Project
        },

        data() {
            return {
                projects: [
                    {
                        title: 'PortfolioEduCenter',
                        image: require('@/assets/files/portfolio_centre.png'),
                        link_to: 'https://keecenter.herokuapp.com/news',
                    }
                ]
            }
        }

    }
</script>

<style scoped>
    .portfolio {
        margin: 0 0 8rem;
    }
</style>