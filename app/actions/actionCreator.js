export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';


export let nextSlide = function(slideNumber){
    return {
        type: NEXT_SLIDE,
        slideNumber: slideNumber
    }
};

export let previousSlide = function(slideNumber){
    return {
        type: PREVIOUS_SLIDE,
        slideNumber: slideNumber
    }
};