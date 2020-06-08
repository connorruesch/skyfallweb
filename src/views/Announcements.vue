<template>
    <div class="announcements">
        <StaticHandler message="Coming Soon!" />
    </div>
</template>

<script>
import StaticHandler from "../components/StaticHandler";

export default {
    name: "Announcements",
    components: {
        StaticHandler
    }
};
</script>