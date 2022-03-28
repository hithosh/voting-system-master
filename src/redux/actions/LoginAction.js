export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function loginAction(value) {
    return {
        type: LOGIN,
        payload: {
            auth: value
        }
    }
}