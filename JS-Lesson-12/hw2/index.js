const cleanTransactionsList = arr => {
    const cleanedArr = [...arr]
        .join()
        .split(',')
        .map(el => el.trim())
        .filter(el => el - 0 === +el)
        .map(el => `$${Number(el).toFixed(2)}`);
    return cleanedArr;
};

console.log(cleanTransactionsList([1, 2, 3, 4, 5, '2dollars'])); // ===> ['$1.00', '$2.00', '$3.00', '$4.00', '$5.00']