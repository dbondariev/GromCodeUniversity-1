'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
// export const pinger = (count, period) => {
//     let counter = 0;

//     const interval = setInterval(() => {
//         console.log(`Ping ${counter}`);
//         counter++;
//         if (counter === count) {
//             clearInterval(interval);
//         }
//     }, period);
// };
//====================================================================================================================

// input: count(number), period(number)
// output: undefined

// Algorithm:
// 1 create counter and console.log(first Ping)
// 2 create variabe id for setInterval(...)
// 3 decrease counter by 1 each interval
// 4 set if until counter > 0 = console.log(Ping) else = stop interval

export const pinger = (count, period) => {
    let counter = count;
    const interval = setInterval(() => {
        if(counter-- > 0) {
            console.log(`Ping`);
        }
        else {
            clearInterval(interval);
        }
    }, period);
}
// examples
// pinger(5, 100); // makes 5 writes with 100 ms interval
// pinger(7, 1500); // makes 7 writes with 1500 ms interval