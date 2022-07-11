// Algorithm:
// 1. Create a function named createLogger that takes no arguments
// 2. Create a memory variable that will hold the value of the last operation
// 3. Create a function named warn that takes one argument (str)
// 4. Add the string to the memory variable
// 5. Create a function named error that takes one argument (str)
// 6. Add the string to the memory variable
// 7. Create a function named log that takes one argument (str) 
// 8. Add the string to the memory variable
// 9. Create a function named getRecords that takes one argument (str)
// 10.Check the argument and return the appropriate array
// 11. Return the value of the memory variable

function createLogger() {
    const memory = [];

    function warn(str) {
        memory.push({ message: str, type: 'warn', dateTime: new Date() });
    }
    function error(str) {
        memory.push({ message: str, type: 'error', dateTime: new Date() });
    }
    function log(str) {
        memory.push({ message: str, type: 'log', dateTime: new Date() });
    }

    function getRecords(str) {
        if (str === 'log') {
            return memory
                .filter(el => el.type === 'log')
                .sort((currentEl, nextEl) => nextEl.dateTime - currentEl.dateTime);
        }
        if (str === 'error') {
            return memory
                .filter(el => el.type === 'error')
                .sort((currentEl, nextEl) => nextEl.dateTime - currentEl.dateTime);
        }
        if (str === 'warn') {
            return memory
                .filter(el => el.type === 'warn')
                .sort((currentEl, nextEl) => nextEl.dateTime - currentEl.dateTime);
        }
        return memory.sort((currentEl, nextEl) => nextEl.dateTime - currentEl.dateTime);
    }

    return { warn, error, log, getRecords };
}

const log1 = createLogger();
const log2 = createLogger();
log1.log('User logged in');
log1.warn('User tried to restricted page');
log1.log('User logged out');
console.log(log1.getRecord('log'));
console.log(log1.getRecord('error'));
console.log(log1.getRecord());
console.log(log2.getRecord());