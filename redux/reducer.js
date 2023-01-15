// import { USER_EMAIL, USER_PASSWORD } from "./action";

// const initialState = [{
//     email: '',
//     password: '',

// }]

//  function loginDetails (state = initialState, action) {

//     switch (action.type) {
//         case USER_EMAIL:
//             return { ...state, email: action.payload };

//         case USER_PASSWORD:
//             return { ...state, password: action.payload };
        
//             default:
//                 return state;

//     }

// }

// export default loginDetails;




const initialState ={
    authToken : null,
}

function AuthReducer   (state = initialState, action){
    switch (action.type) {
        case 'LOGIN':
            return{
                ...state, //copy all previous state
                authToken: action.payload,
            }
    
        default:
            return state;
    }
    console.log(authToken);
    console.warn(authToken);
    
}

export default AuthReducer;