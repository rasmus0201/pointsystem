export function reset({ commit }) {
    commit('reset');
}

export function update({ commit }, val) {
    commit('update', val);
}
