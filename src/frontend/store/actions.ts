
export const SET_JOKE = 'SET_JOKE';
export const SET_ERROR = 'SET_ERROR';

export const setJoke = (joke: string) => {
    return {
        type: SET_JOKE,
        joke,
    };
};

export const setError = (error: boolean) => {
    return {
        type: SET_ERROR,
        error,
    };
};
