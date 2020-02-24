<template>
    <q-page class="q-pa-md">
        <div class="row">
            <div class="col-12 q-mb-sm">
                <q-badge color="positive" align="middle" class="q-mr-sm">
                    Accepteret: {{ acceptedCount }}
                </q-badge>
                <q-badge color="negative" align="middle">
                    Ikke-accepteret: {{ deniedCount }}
                </q-badge>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <calendar
                    :date="currentDate"
                    class="full-width"
                    @updated="changeDate"
                />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <q-card class=" full-width">
                    <q-card-section>
                        <div class="text-h6">{{ item.title }}</div>
                        <div class="text-subtitle2">{{ item.description }}</div>
                    </q-card-section>

                    <q-separator />

                    <q-card-actions>
                        <q-btn
                            push
                            :color="
                                item.state === 'accepted' ? 'positive' : 'white'
                            "
                            @click="updateItem('accepted')"
                            >👍</q-btn
                        >
                        <q-btn
                            push
                            :color="
                                item.state === 'denied' ? 'negative' : 'white'
                            "
                            @click="updateItem('denied')"
                            >👎</q-btn
                        >
                    </q-card-actions>
                </q-card>
            </div>
        </div>
        <div class="row">
            <div class="col-12 q-mt-lg">
                <q-btn color="warning" @click="resetItems()">Nulstil alt</q-btn>
            </div>
        </div>
    </q-page>
</template>

<script>
import { date } from 'quasar';
import { mapState, mapActions } from 'vuex';
import Calendar from '../components/Calendar';

export default {
    name: 'PageIndex',

    components: { calendar: Calendar },

    data() {
        return {
            currentDate: date.formatDate(Date.now(), 'YYYY-MM-DD'),
            recompute: Math.random(),
        };
    },

    computed: {
        ...mapState('items', {
            items: state => state.items,
        }),

        item: function() {
            const dummy = this.recompute;

            if (this.items.hasOwnProperty(this.currentDate)) {
                return this.items[this.currentDate];
            }

            return this.getDefaultItem(this.currentDate);
        },

        acceptedCount: function() {
            const dummy = this.recompute;
            let count = 0;

            for (var prop in this.items) {
                if (this.items[prop].state === 'accepted') {
                    count++;
                }
            }

            return count;
        },

        deniedCount: function() {
            const dummy = this.recompute;
            let count = 0;

            for (var prop in this.items) {
                if (this.items[prop].state === 'denied') {
                    count++;
                }
            }

            return count;
        },
    },

    methods: {
        ...mapActions('items', ['update', 'reset']),

        getDefaultItem(dateKey) {
            const dateObj = date.extractDate(dateKey, 'YYYY-MM-DD');

            return {
                title: 'Point for ' + date.formatDate(dateObj, 'DD/MM-YYYY'),
                description: 'Point ikke givet endnu',
                state: null,
                key: dateKey,
            };
        },

        changeDate(newDate) {
            this.currentDate = date.formatDate(newDate, 'YYYY-MM-DD');
        },

        refresh() {
            this.recompute = Math.random();
        },

        resetItems() {
            this.reset();
            this.refresh();
        },

        updateItem(state) {
            const item = {};

            item.title = this.item.title;
            item.description =
                state === 'accepted'
                    ? 'Point accepteret'
                    : 'Point ikke accepteret';
            item.state = state;
            item.key = this.currentDate;

            this.update(item);

            this.refresh();
        },
    },
};
</script>
