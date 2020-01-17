import React, {useState, useEffect, useRef} from 'react';

function Flipper({sequence, delay = 100, loop = 'none', children}) {
    const [step, updateStep] = useState(undefined);
    const changeValue = useRef(); // for pingpong animation type

    useEffect( () => {
        (sequence.length > 0) && (updateStep(-1));
        changeValue.current = 1;
    }, [sequence, loop]);

    if ((step !== undefined) && ((step !== sequence.length - 1) || loop !== 'none')) {
        let nextStep;
        switch(loop) {
            case 'pingpong':
                nextStep = (step + changeValue.current + sequence.length) % sequence.length;
                ((nextStep === 0) || (nextStep === sequence.length - 1)) && (changeValue.current *= -1);
                break;
            case 'reverse':
                nextStep = (step - 1 + sequence.length) % sequence.length;
                break;
            case 'random':
                nextStep = Math.floor(Math.random() * sequence.length);
                break;
            case 'forward':
                nextStep = (step + 1) % sequence.length;
                break;
            case 'none':
                nextStep = step + 1;
                break;
            default:
                nextStep = undefined;
        };

        setTimeout( () => {
            updateStep(nextStep);
        }, delay);
    };

    return (
        <>
            {React.Children.map(children, child => {
                return React.cloneElement(child, {currentSlide: sequence[step]});
            })}
        </>
    );
};

export default Flipper;