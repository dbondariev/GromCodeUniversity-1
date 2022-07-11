const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = event => {
    const isButton = event.target.classList.contains('counter__button'); // checks if the target is a button

    if (!isButton) {
        // if the target is not a button, return undefined
        return;
    }

    const { action } = event.target.dataset;

    const oldValue = Number(counterValueElem.textContent); // counter value set on default to 0

    const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1; // if action is decrease, set newValue to oldValue - 1, else set newValue to oldValue + 1

    localStorage.setItem('counterValue', newValue); // save newValue to localStorage

    counterValueElem.textContent = newValue; // set newValue to counterValueElem
};

counterElem.addEventListener('click', onCounterChange); // add event listener to counterElem

const onStorageChange = e => {
    // on refresh all pages will have the same value
    counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange); // add event listener to window

const onDocumentLoaded = () => {
    // if the counterValue is set in localStorage, set it to counterValueElem
    counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded); // add event listener to document