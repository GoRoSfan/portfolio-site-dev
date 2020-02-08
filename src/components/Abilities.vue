<template>
    <section class="abilities">
        <h3 class="subheading">I can help with (Чем могу быть полезен)</h3>
        <ul class="custom-desires">
            <Desire v-for="(one_desire, index) in desire_list"
                    :key="index"
                    :desire-title="one_desire.title"
                    :desire-image="one_desire.image"
                    :skill-list="one_desire.skill_list"
            />
        </ul>
    </section>
</template>

<script>
    import Desire from './Desire'

    export default {
        name: "Abilities",
        components: {
            Desire
        },

        data() {
            return {
                desire_list: [
                    {
                        title: 'Site layout (Верстка сайта)',
                        image: require('@/assets/img/preferences-desktop-wallpaper.svg'),
                        skill_list: [
                            {
                                title: 'HTML',
                                image: require('@/assets/img/icon-html.svg')
                            },
                            {
                                title: 'CSS',
                                image: require('@/assets/img/icon-css.svg')
                            }
                        ]
                    },
                    {
                        title: 'Develop site (Разработка сайта)',
                        image: require('@/assets/img/www.svg'),
                        skill_list: [
                            {
                                title: 'Django',
                                image: require('@/assets/img/icon-django.png')
                            },
                            {
                                title: 'Vue',
                                image: require('@/assets/img/icon-vue.png')
                            }
                        ]
                    },
                    {
                        title: 'Help with Site logic (Помощь с логикой сайта)',
                        image: require('@/assets/img/union.svg'),
                        skill_list: [
                            {
                                title: 'TechTask',
                                image: require('@/assets/img/icon-tech-task.png')
                            },
                            {
                                title: 'UML',
                                image: require('@/assets/img/icon-uml.png')
                            }
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .abilities {
        padding: 2rem;
    }

    .custom-desires {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: flex-start;

        padding: 0;

        list-style: none;
    }
</style>