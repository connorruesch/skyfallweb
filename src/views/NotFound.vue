<template>
    <div class="page-not-found">
        <b-row>
            <b-col cols="5">
                <img src="../assets/iconasset.png" alt />
            </b-col>
            <b-col cols="7">
                <h1 class="msg">Page not found!</h1>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "NotFound"
};
</script>

<style lang="scss" scoped>
$bg: #152238;

.page-not-found {
    background-color: $bg;
    height: 100vh;
}

.row {
    color: white;
    padding: 30vh 20rem 0 20rem;
    margin: auto;
    img {
        width: 80%;
    }

    .msg {
        padding-top: 20%;
        font-size: 75px;
        text-transform: uppercase;
        font-weight: 600;
    }
}
</style>
