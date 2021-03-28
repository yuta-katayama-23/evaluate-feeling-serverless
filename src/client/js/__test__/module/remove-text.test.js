import {
    removeText
} from '../../module/remove-text';

describe("Testing the removeText functionality", () => {
    test('in case exit icon', () => {
        document.body.innerHTML = '<div id="results">test</div>';
        document.querySelector('#results').innerHTML = 'test';

        removeText();

        expect(document.querySelector('#results').innerHTML).toBe('');
    });
});