// js module
import { validate } from './js/validate';
import { sentimentAnalysis } from './js/sentiment-analysis';

// Scss
import './styles/base.scss';
import './styles/header.scss'

// import all img
const importAll = (r) => r.keys().forEach(r);
importAll(require.context('../', true, /\.jng$/));

// const definition
const subEl = document.querySelector('#submit-btn');

// Event handler
subEl.addEventListener('click', (event) => {
    sentimentAnalysis(event);
});