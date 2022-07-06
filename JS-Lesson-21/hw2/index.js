export const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(itemsList);
    return elementsList;
}

export const getItemsArray = () => {
    const elementsList = document.querySelectorAll('.tool');
    const elementArray = Array.from(elementsList);
    console.dir(elementArray);
    return elementArray;
}

getItemsList();
