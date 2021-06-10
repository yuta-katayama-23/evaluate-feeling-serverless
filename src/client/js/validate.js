const subEl = document.querySelector('#submit-btn');
const txtEl = document.querySelector('#txt');
const pattern = new RegExp('[a-zA-Z]');

export function validate(event) {
    txtEl.classList.remove('is-valid', 'is-invalid');

    if (pattern.test(txtEl.value)) {
        txtEl.classList.add('is-valid');
        subEl.disabled = false;
    } else {
        txtEl.classList.add('is-invalid');
        subEl.disabled = true;
    }

    event.preventDefault();
    event.stopPropagation();
};

txtEl.addEventListener('input', (event) => {
    validate(event);
});

subEl.addEventListener('click', (event) => {
    validate(event);
})