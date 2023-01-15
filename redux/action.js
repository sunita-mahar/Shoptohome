// export  const USER_EMAIL = 'USER_EMAIL';
// export  const USER_PASSWORD = 'USER_PASSWORD';

// export const setEmail = email  => dispatch =>{
//   dispatch({
//           type : USER_EMAIL,
//           payload : email,
//         });
    
// };

// export const setPassword = password => dispatch =>{
//   dispatch({
//           type : USER_PASSWORD,
//           payload : password,
//     });
 
// };



export const LoginFunction = (email, password) =>{
    const token = email+password;
    return({
     type: 'LOGIN',
     payload: token,
     
    })
    console.log(token);
 }