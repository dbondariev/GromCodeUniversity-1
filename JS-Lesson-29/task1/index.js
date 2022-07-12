//Add Image 


// input: imgage source, callback function
// output: none

// Algorithm:
// 1 create an img element
// 2 set source and add it to our page
// 3 add eventListener function after load and inside callback function call our another callback from func argument 'onImageLoaded'
// 4 add eventListener in case of 'error'


export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        callback(null, imgElem);
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => callback('Image load is failed'));
};

// callack function
const onImageLoaded = (error, imgElem) => {
    if (error) {
        console.log(error);
        return;
    }

    const { width, height } = imgElem;
    const sizeElem = document.querySelector('.image-size');

    sizeElem.textContent = `${width} x ${height}`;
}

