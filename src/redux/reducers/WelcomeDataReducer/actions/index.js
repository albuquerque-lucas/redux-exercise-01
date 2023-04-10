export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const saveUserDataAction = (firstName, lastName, age) => ({ 
    type: SAVE_USER_DATA,
    firstName,
    lastName,
    age,
});