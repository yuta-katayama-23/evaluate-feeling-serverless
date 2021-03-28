// js module
import {
    validate
} from './js/validate';
import {
    sentimentAnalysis
} from './js/sentiment-analysis';

// Sass
import './styles/resets.scss';
import './styles/base.scss';
// import './styles/footer.scss'
// import './styles/form.scss'
import './styles/header.scss'

// image
import './img/strong_positive.jpg';
import './img/positive.jpg';
import './img/neutral.jpg';
import './img/negative.jpg';
import './img/strong_negative.jpg';
import './img/none.jpg';

// const definition
const subEl = document.querySelector('.btn-primary');

// Event handler
subEl.addEventListener('click', (event) => {
    sentimentAnalysis(event);
});

export {
    sentimentAnalysis,
    validate
};