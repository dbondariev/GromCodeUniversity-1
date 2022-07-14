export const makePromise = number => {
  return Promise.resolve(number);
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
console.log(makePromise());