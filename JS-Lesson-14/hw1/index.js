let memory = 0;

function changeNumber() {

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}

export function add(number) {
    memory += number;
}

export function decrease(number) {
    memory -= number;
}

export function reset() {
    memory = 0;
}

export function getMemo() {
    return memory
}