<template>
    <div class="rules">
        <StaticHandler message="Coming Soon!" />
    </div>
</template>

<script>
import StaticHandler from '../components/StaticHandler';

export default {
    name: 'Rules',
    components: {
        StaticHandler,
    },
    metaInfo() {
        return {
            title: 'SkyFall Network | Rules',
        };
    },
};
</script>
