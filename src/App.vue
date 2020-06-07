<template>
    <div id="app">
        <Navbar v-on:scroll.native="handleScroll" />
        <router-view />
    </div>
</template>

<script>
import Navbar from "../src/components/Navbar";

export default {
    name: "App",
    components: {
        Navbar
    },
    methods: {
        handleScroll() {
            const navbar = document.querySelector(".navigation");
            if (window.scrollY > 50) {
                navbar.classList.add("navScroll");
            } else {
                navbar.classList.remove("navScroll");
            }
        }
    }
};
</script>

<style lang="scss">
$maincolor: #0366fc;
$secondarycolor: #152238;
$font-stack: Arial, Helvetica, sans-serif;

/* Basic CSS Reset */
html,
body,
* {
    padding: 0;
    margin: 0;
    font-family: $font-stack;
}
</style>
