/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой он отключен аннотацией eslint-disable */

// Algorithm:
// 1. Create an array
// 2. Run for loop and create a function for each iteration
// 3. Return the array of functions
// 4. Export default array;

let arr = [];

for (let i = 0; i < 10; i += 1) {
    arr[i] = function () {
        return i;
    };
}

export { arr };
