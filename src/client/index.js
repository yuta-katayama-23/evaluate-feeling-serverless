// js module
import { sentimentAnalysis } from './js/sentiment-analysis';

// Scss
import './styles/base.scss';
import './styles/header.scss'

const importAll = (r) => r.keys().forEach(r);
importAll(require.context('../', true, /\.jpg$/));

// const definition
const subEl = document.querySelector('#submit-btn');

// Event handler
subEl.addEventListener('click', (event) => {
    sentimentAnalysis(event);
});