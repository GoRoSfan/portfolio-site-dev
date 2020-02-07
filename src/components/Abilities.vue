<template>
    <section class="abilities">
        <h3>I can help with (Чем могу быть полезен):</h3>
        <ul class="custom-desires">
            <Desire v-for="one_desire in desire_list"
                    :key="one_desire.title"
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
    .abilities h3 {
        margin: 0;
        padding-bottom: 16px;
    }

    .custom-desires {
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        align-items: flex-start;

        list-style: none;
    }
</style>