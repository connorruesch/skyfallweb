<template>
    <!--Navigation-->
    <b-navbar class="navigation" toggleable="md" type="dark">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="links">
                <b-nav-item class="padding" to="/">Home</b-nav-item>
                <b-nav-item class="padding" to="/rules">Rules</b-nav-item>
                <b-nav-item class="padding" to="/play">Play</b-nav-item>
                <b-nav-item class="padding" to="/announcements">Announcements</b-nav-item>
                <b-nav-item class="padding" to="/">Support</b-nav-item>
            </b-navbar-nav>

            <a href="https://mcskyfall.org/discord" class="ml-auto discord">
                <b-navbar-nav class="discord-icon">
                    <i class="fab fa-discord"></i>
                    <p>{{ discordOnline }} Online Members!</p>
                </b-navbar-nav>
            </a>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            discordOnline: 0
        };
    },
    created() {
        fetch(
            "https://ptb.discordapp.com/api/guilds/716012002748792972/widget.json"
        )
            .then(res => res.json())
            .then(resData => (this.discordOnline = resData.presence_count))
            .catch(err => console.log(err));
    }
};
</script>

<style lang="scss" scoped>
/* Global Navbar */
.navbar {
    padding: 1rem 1.5rem 1rem 2rem;
    text-decoration: none;
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    .links {
        padding-left: 2rem;
    }

    .padding {
        margin-right: 1rem;
    }

    .nav-link {
        color: white !important;
        position: relative;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.2rem;
        text-transform: uppercase;
    }

    .navScroll {
        background-color: rgba(0, 0, 0, 0.6);
        transition: 1s;
    }

    /*Navigation link hover effects*/
    .nav-link:hover {
        color: white;
    }

    .nav-link::after {
        content: "";
        position: absolute;
        height: 6px;
        width: 100%;
        top: -53%;
        left: 0%;
        background: white;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.18s;
    }

    .nav-link:hover::after {
        transform: scaleX(1);
    }

    .discord {
        color: white;
        padding-right: 2rem;
        text-decoration: none;

        i {
            font-size: 35px;
            padding: 0.7rem;
        }

        p {
            padding-top: 1rem;
            font-size: 1.06rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        :hover {
            color: #7289da !important;
            transition: 0.3s ease-in-out;
        }
    }
}
</style>