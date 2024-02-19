<template>
    <button v-if="getLoginStatus" @click="switchLogin">Login</button>
    <button v-else @click="switchLogin">Logout</button>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getLoginStatus']),
    },
    methods: {
        ...mapMutations(['switchLogin']),
    },
};
</script>