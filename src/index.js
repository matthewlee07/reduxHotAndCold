import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import {setGuess} from './actions';
import store from './store';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

store.dispatch(setGuess(10));
console.log(store.getState());