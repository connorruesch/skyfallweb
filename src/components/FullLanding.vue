<template>
    <div class="landing">
        <div class="landing-header">
            <img src="../assets/skyfall_tiny.png" alt="SkyFall" />
        </div>
    </div>
</template>

<script>
export default {
    name: "FullLanding"
};
</script>

<style lang="scss" scoped>
.landing {
    text-align: center;
    z-index: -999;
    width: 100%;
    height: 100vh;
    background-image: url("../assets/skyfalltempbackground.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}

.landing-header {
    padding-top: 29vh;
}
</style>
