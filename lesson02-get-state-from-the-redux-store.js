//get-state-from-the-redux-store

const store = Redux.createStore(
    (state = 5) => state
);

// change code below this line

let currentState = store.getState();