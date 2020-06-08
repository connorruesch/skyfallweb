<template>
    <div id="app">
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from '../src/components/Navbar';

export default {
    name: 'App',
    components: {
        Navbar,
    },
    metaInfo() {
        return {
            title: 'SkyFall Network',
            meta: [
                {
                    name: 'language',
                    content: 'english',
                },
                {
                    name: 'author',
                    content: 'SkyFall Network',
                },
                {
                    name: 'designer',
                    content: 'Baricaade',
                },
                {
                    name: 'description',
                    content: 'The SkyFall Network is a minecraft network consisting of two gamemodes: skyblock and eco-based survival. We are focused on giving players a fun and play-2-win experience, with special features such as an ingame store, playtime rewards, and more.',
                },
                {
                    name: 'keywords',
                    content: 'minecraft,play2win,non-pay2win,network,server,1.8.9,skyfall,skyfallnetwork',
                },
                {
                    name: 'copyright',
                    content: 'Copyright 2020 | SkyFall Network',
                },
                {
                    property: 'og:image',
                    content: '../assets/iconasset.png',
                },
            ],
        };
    },
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
