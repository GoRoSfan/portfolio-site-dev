<template>
    <nav class="menu">
        <div class="menu-item">
            <h3 @click="visible_menu = !visible_menu">Contacts</h3>
            <div :class="{'visible-set': visible_menu}" class="sub-menu" >
                <dl>
                    <dt>Phone:</dt>
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
    }
</script>

<style scoped>
    h3{
        margin: 0;

        font-size: 1.5rem;
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

        transition: 0.5s ease-in-out;
    }

    .visible-set{
        opacity: 1;
        visibility: visible;
    }
</style>