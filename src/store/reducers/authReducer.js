
const initState = {
    authError : null
};

const authReducer = (state=initState,action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError : 'Login Failed'
            }

        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('signOut success');
            return state

        case 'SIGNUP_SUCCESS':
            console.log('signUp success');
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('signUp Failed');
            return {
                ...state,
                authError: action.e.message
            }

        default :
            return state;
    }
}
export default authReducer
