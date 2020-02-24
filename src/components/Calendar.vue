<template>
    <q-date
        v-model="modelDate"
        minimal
        first-day-of-week="1"
        class="q-mb-md"
    ></q-date>
</template>
<script>
import { date } from 'quasar';

export default {
    props: {
        date: {
            type: [String, Number, Date],
            required: true,
        },
    },

    data() {
        return {
            modelDate: null,
        };
    },

    mounted() {
        this.modelDate = date.formatDate(this.date, 'YYYY/MM/DD');
    },

    watch: {
        modelDate(date) {
            this.$emit('updated', date);
        },
    },
};
</script>
