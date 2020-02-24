export const reset = state => {
    state.items = {};
};

export const update = (state, val) => {
    state.items[val.key] = val;
};
