<template>
    <div>
        <header class="page-header">
            <div class="container">
                <Menu></Menu>
            </div>
        </header>
        <slot id="content"></slot>
        <footer class="page-footer">
            <div class="container">
                Буду рад Вам помочь
                <a class="email" href="mailto:olegsinilo126@gmail.com">olegsinilo126@gmail.com</a>
                <a class="phone" href="tel:+380993907922">+38 099 390 79 22</a>
            </div>
        </footer>
    </div>
</template>

<script>
    import Menu from "./Menu"

    export default {
        name: "MainTemplate",
        components: {
            Menu,
        },
    }
</script>

<style>
    .container {
        max-width: 1408px;
        margin: 0 auto;
        padding: 0 16px;
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

    .page-header a:active,
    .page-footer a:active {
        opacity: 0.5;
    }

    .email {
        padding-left: 28px;
        background-image: url("../assets/img/icon-email.svg");
    }

    .email:focus,
    .email:hover {
        background-image: url("../assets/img/icon-email-alt.svg");
    }

    .phone {
        padding-left: 21px;
        background-image: url("../assets/img/icon-phone.svg");
    }

    .phone:focus,
    .phone:hover {
        background-image: url("../assets/img/icon-phone-alt.svg");
    }

</style>

<style scoped>
    .page-header {
        margin: 0;
        padding: 20px 0;
    }

    .page-footer {
        padding: 40px 0;
        background-color: #212349;
    }
</style>