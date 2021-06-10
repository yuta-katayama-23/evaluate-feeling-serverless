// js module
import { validate } from './js/validate';
import { sentimentAnalysis } from './js/sentiment-analysis';

// Scss
import './styles/base.scss';
import './styles/header.scss'

// import all img
import './img/strong_positive.jpg';
import './img/positive.jpg';
import './img/neutral.jpg';
import './img/negative.jpg';
import './img/strong_negative.jpg';
import './img/none.jpg';

// FIXME 以下だとNetifyでうまくいかない。理由を調べる。
// const importAll = (r) => r.keys().forEach(r);
// importAll(require.context('../', true, /\.jng$/));

// const definition
const subEl = document.querySelector('#submit-btn');

// Event handler
subEl.addEventListener('click', (event) => {
    sentimentAnalysis(event);
});