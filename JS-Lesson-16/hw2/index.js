/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */

// Algorithm:
// 1. Create a function named bar that takes no arguments
// 2. Check if the variable is not foo then set it to 10
// 3. Return the value of the variable

// 4. Export default bar;
// 5. Console.log the result of the function

var foo = 1;
function bar() {
    if (!foo) {
        foo = 10;
    }
    return foo;
}
export default foo = bar();

console.log(foo);