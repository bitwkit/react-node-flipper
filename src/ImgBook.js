import React, {useRef, useReducer, useEffect} from 'react';

function decrement(state) {
    return state - 1;
};

function ImgBook({imgUrls, currentSlide = undefined}) {
    const images = useRef();
    const container = useRef();
    const prevShown = useRef();
    const [toLoad, dispatchLoad] = useReducer(decrement, imgUrls.length);

    useEffect( () => {
        images.current = [];
        prevShown.current = undefined;

        for (let i = 0; i < imgUrls.length; i++) {
            const img = document.createElement('img');
            img.src = imgUrls[i];
            img.alt = i;
            img.onload = () => dispatchLoad();
            images.current[i] = img;
        };
    }, [imgUrls]);

    useEffect( () => {
        (prevShown.current !== undefined) && container.current.removeChild(images.current[prevShown.current]);
        if (toLoad === 0) {
            (currentSlide !== undefined) && container.current.appendChild(images.current[currentSlide]);
            prevShown.current = currentSlide;
        };
    }, [toLoad, currentSlide]);

    return (
        <div ref={container}></div>
    );
};

export default ImgBook;