// for using async/await in babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// js module
import {
    selectFeeling
} from './module/select-feeling'
import {
    removeIcon
} from './module/remove-icon'
import {
    removeText
} from './module/remove-text'

/**
 * i am module and i judge feeling from input text
 */
export function sentimentAnalysis(event) {
    event.preventDefault();

    if (txtEl.value) {
        fetchData(`${baseUrl}/fetchMeaningCloud`, {
            txt: txtEl.value
        }).then((data) => {
            renderResult(data.score_tag);
        });
    }
}

// netify server-less
const baseUrl = '/.netlify/functions/index';

// Element
const txtEl = document.querySelector('#txt');
const resultsEl = document.querySelector('#results');

const fetchData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const fetchData = await response.json();
        return fetchData;
    } catch (error) {
        console.log("error", error);
    }
}

/**
 * i render result
 * @param {string} scoreTag 
 */
function renderResult(scoreTag) {
    resultsEl.innerHTML = `now your feeling is <strong>${selectFeeling(scoreTag)['value']}</strong>`;

    removeIcon();
    let img = document.createElement('img');
    img.classList.add('icon-examples');
    img.src = selectFeeling(scoreTag)['icon'];
    document.getElementById('icon').appendChild(img);
}