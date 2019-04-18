<template>
    <div>
        <app-serverr-status v-for="server in 5"></app-serverr-status>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus';

    export default {
        components: {
            'app-serverr-status': ServerStatus
        }
    }
</script>

