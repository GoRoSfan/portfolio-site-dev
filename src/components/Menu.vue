<template>
    <nav class="menu">
        <div class="menu-item">
            <h3 @click="visible_menu = !visible_menu">{{ 'MenuContacts' | translateElement($lang) }}</h3>
            <div :class="{'visible-set': visible_menu}" class="sub-menu">
                <dl>
                    <dt>{{ 'MenuPhone' | translateElement($lang) }}:</dt>
                    <dd>
                        <a href="tel:+380993907922" class="phone">+38 099 390 79 22</a>
                    </dd>

                    <dt>E-mail:</dt>
                    <dd>
                        <a href="mailto:olegsinilo126@gmail.com" class="email">olegsinilo126@gmail.com</a>
                    </dd>

                    <dt>Telegram:</dt>
                    <dd><a href="https://t.me/Sinilo_Oleg" class="telegram">Oleg OLEG oleg</a></dd>
                </dl>
            </div>
        </div>
        <div class="menu-item">
            <div class="lang-menu">
                <span @click="changeLang('en')">en</span>
                /
                <span @click="changeLang('ru')">ru</span>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                visible_menu: false,
            }
        },
        methods: {
            changeLang(lang) {
                if (this.$lang !== lang) {
                    this.$lang = lang;
                }

            },
        }
    }
</script>

<style scoped>
    .menu {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
    }

    .menu h3 {
        margin: 0;
        border-radius: 2rem;
        padding: 1rem 2rem 1rem 1rem;


        font-size: 1.5rem;

        cursor: pointer;
    }

    .menu h3:hover {
        color: #0b0c23;

        background-color: #f9e7a8;
    }

    .menu-item {
        position: relative;
    }

    .sub-menu {
        visibility: hidden;
        opacity: 0;

        position: absolute;
        top: 100%;
        left: 0;
        z-index: 100;

        border-radius: 2rem;

        background-color: rgba(17, 17, 35, 0.8);

        transition: 0.5s ease-in-out;
    }

    .sub-menu dl {
        margin: 1rem 0 1rem 1rem;
    }

    .lang-menu span {
        border-radius: 0.5rem;
        padding: 0.2rem;

        cursor: pointer;
    }

    .lang-menu span:hover {
        color: #0b0c23;

        background-color: #f9e7a8;
    }

    .visible-set {
        opacity: 1;
        visibility: visible;
    }
</style>