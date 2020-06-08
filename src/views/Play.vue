<template>
    <div class="play">
        <StaticHandler message="Coming Soon!" />
    </div>
</template>

<script>
import StaticHandler from '../components/StaticHandler';

export default {
    name: 'Play',
    components: {
        StaticHandler,
    },
    metaInfo() {
        return {
            title: 'SkyFall Network | Play',
        };
    },
};
</script>
