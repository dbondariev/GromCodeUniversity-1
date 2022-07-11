/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой он отключен аннотацией eslint-disable */

// Algorithm:   
// 1. Create variable named a and set it to 17
// 2. If the variabble is a then set it to 1
// 3. Console.log the value of the variable(a)
// 4. Console.log the value of a outside the closing bracket

// Don't forget to test your code

let a = 17;

if (a) {
    let a = 1;

    console.log(a);
}

console.log(a);
