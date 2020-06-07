<template>
    <div id="app">
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from "../src/components/Navbar";

export default {
    name: "App",
    components: {
        Navbar
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
