import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (event) {
        console.log(event);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (event) {
        console.log(event);
        return undefined;
    }
}

const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(...middleware))
//   );
  
//   export default store;


export const store = createStore(
    rootReducer, 
    loadFromLocalStorage(), 
    composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

window.store = store;