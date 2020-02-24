import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import items from './items';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const vuexPersist = new VuexPersist({
    key: 'pointsystem',
    storage: window.localStorage,
});

export default function() {
    const Store = new Vuex.Store({
        plugins: [vuexPersist.plugin],

        modules: {
            items,
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV,
    });

    return Store;
}
