export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCSESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => {
    return { type: REQUEST_STARTED };
};

const requestSuccessful = (wizards) => {
    return {
        type: REQUEST_SUCCESSFUL,
        payload: wizards,
    };
};

const requestFailed = (error) => { 
    return {
        type: REQUEST_FAILED,
        payload: error,
    };
};


export const fetchWizardName = () => {
    return async (dispatch) => {
        try{
            dispatch(requestStarted());
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            console.log(data);
            dispatch(requestSuccessful(data.message));
        } catch(error){
            dispatch(requestFailed(error.message));
        }
    };
};