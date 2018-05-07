import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import './index.css';

//Bootstrp3
import '../node_modules/bootstrap3/dist/css/bootstrap.min.css';
//import App from './App';
import App from './TodoListApp';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyCCFcg7TAt5NBCTQ--IwuGPqnWKBp2qimM",
    authDomain: "curso-reactjs.firebaseapp.com",
    databaseURL: "https://curso-reactjs.firebaseio.com",
    projectId: "curso-reactjs",
    storageBucket: "curso-reactjs.appspot.com",
    messagingSenderId: "28684305066"
});

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
