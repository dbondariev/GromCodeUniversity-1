export const getTittle = () => {
    return document.querySelector('.title').textContent;
}
export const getDescription = () => {
    return document.querySelector('.about').innerText;
}
export const getPlans = () => {
    return document.querySelectorAll('.plans').innerHTML;
}
export const getGoal = () => {
    return document.querySelector('.goal').outerHTML;
}

console.log(getTittle());
console.log(getDescription());
console.log(getPlans());
console.log(getGoal());