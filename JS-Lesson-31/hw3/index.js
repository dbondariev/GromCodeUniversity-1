export function delay(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(null);
        }, number);
    });
}

delay(3000).then(() => {
    console.log('Done');
}
);