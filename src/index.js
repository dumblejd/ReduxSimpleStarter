import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyApSf9o_R3Fwnh5ZqlvsikAHUnJjkUaKLQ';

const App = ()=>{
    return (<div>
        <SearchBar />
    </div>);
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
