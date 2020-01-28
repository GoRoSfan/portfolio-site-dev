<template>
    <div>
        <header class="page-header">
            <div class="container">
                <div class="menu-item">
                    <h3 @click="visible_menu = !visible_menu">Contacts</h3>
                    <div class="sub-menu" :style="visible_menu ? visibleSet : hiddenSet">
                        <dl>
                            <dt>Phone:</dt>
                            <dd>
                                <a href="tel:+380993907922" class="header-phone">+38 099 390 79 22</a>
                            </dd>

                            <dt>E-mail:</dt>
                            <dd>
                                <a href="mailto:olegsinilo126@gmail.com" class="header-email">olegsinilo126@gmail.com</a>
                            </dd>

                            <dt>Telegram:</dt>
                            <dd><a href="https://t.me/Sinilo_Oleg" class="header-telegram">Oleg OLEG oleg</a></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </header>
        <slot id="content"></slot>
        <footer class="page-footer">
            <div class="container">
                Буду рад Вам помочь
                <a class="footer-email" href="mailto:olegsinilo126@gmail.com">olegsinilo126@gmail.com</a>
                <a class="footer-phone" href="tel:+380993907922">+38 099 390 79 22</a>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "MainTemplate",
        data: () => {
            return {
                visible_menu: false,
                visibleSet: {
                    opacity: '1',
                    visibility: 'visible'
                },
                hiddenSet: {
                    opacity: '0',
                    visibility: 'hidden'
                }
            }
        },
    }
</script>

<style>
    .container {
        max-width: 1408px;
        margin: 0 auto;
        padding: 0 16px;
    }
</style>

<style scoped>
    .page-header {
        margin: 0;
        padding: 20px 0;
    }

    .page-header .menu-item {
        position: relative;

        margin: 5px;

        z-index: 10;
    }

    .page-header h3 {
        margin: 0;
    }

    .page-header .sub-menu {
        visibility: hidden;
        opacity: 0;

        position: absolute;
        top: 100%;
        left: 0;

        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
    }

    .page-header a,
    .page-footer a {
        position: relative;
        margin-right: 64px;
        padding-bottom: 10px;
        padding-top: 9px;
        font-weight: 500;
        text-decoration: none;
        background-repeat: no-repeat;
        background-position: left;
        color: inherit;
    }

    .page-header a:focus,
    .page-header a:hover,
    .page-footer a:focus,
    .page-footer a:hover {
        color: #f9dd79;
    }

    .page-header a::after,
    .page-footer a::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #f9dd79;
        transition: width 200ms;
    }

    .page-header a:hover::after,
    .page-footer a:hover::after {
        width: 100%;
    }

    .header-email,
    .footer-email {
        padding-left: 28px;
        background-image: url("../assets/img/icon-email.svg");
    }

    .header-email:focus,
    .header-email:hover,
    .footer-email:focus,
    .footer-email:hover {
        background-image: url("../assets/img/icon-email-alt.svg");
    }

    .header-phone,
    .footer-phone {
        padding-left: 21px;
        background-image: url("../assets/img/icon-phone.svg");
    }

    .header-phone:focus,
    .header-phone:hover,
    .footer-phone:focus,
    .footer-phone:hover {
        background-image: url("../assets/img/icon-phone-alt.svg");
    }

    .page-header a:active,
    .page-footer a:active {
        opacity: 0.5;
    }

    .page-footer {
        padding: 40px 0;
        background-color: #212349;
    }
</style>