import {
    removeIcon
} from '../../module/remove-icon';

describe("Testing the removeIcon functionality", () => {
    test('in case exit icon', () => {
        document.body.innerHTML = '<div id="icon"></div>';

        let img = document.createElement('img');
        document.getElementById('icon').appendChild(img);

        removeIcon();

        expect(document.querySelector('#icon').childNodes.length).toBe(0);
    });

    test('in case not exit icon', () => {
        document.body.innerHTML = '<div id="icon"></div>';

        removeIcon();

        expect(document.querySelector('#icon').childNodes.length).toBe(0);
    });
});