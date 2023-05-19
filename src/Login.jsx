



// Domain        =>        dev-b45defo0qefans00.us.auth0.com
// Client ID     =>        0CnN1xixrjirHZw2aU4YqqNVoUgJrqnz    
// Client Secret =>        -SsVC_46z4FYObkUFi5wTGBwAFke2je3wb18hD35AANaPwd2r_dnU4iXFRyVRfOa 





































// import React from 'react';
// import './Style.css';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode';
// import { redirect, useNavigate } from 'react-router-dom';

// const Login = () => {
//   return (
//     <div className='main-container'>
//         <GoogleOAuthProvider clientId="51843222917-9egs50geh3q8emh7ch8fimqm16nlk1ku.apps.googleusercontent.com">

//             <GoogleLogin
//             onSuccess={credentialResponse => {
//                 const details = jwt_decode(credentialResponse.credential);
//                 console.log(details);
//                 console.log(credentialResponse);
//                 // localStorage.setItem('token', credentialResponse.credential);
//                 // const navigation = useNavigate();
//                 // navigation('/home');
//                 redirect('/home')

//             }}
//             onError={() => {
//                 console.log('Login Failed');
//             }}
//             />
            
//         </GoogleOAuthProvider>
//     </div>
//   )
// }

// export default Login;

// // client id   =>       51843222917-9egs50geh3q8emh7ch8fimqm16nlk1ku.apps.googleusercontent.com
// // client sceret =>         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

// // api key   =>             AIzaSyDpY9W3UG3MIA1GJtNVr5BR0qfGuVTVyfg

































// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';

// function Login() {
//     const responseMessage = (response) => {
//         console.log(response);
//     };
//     const errorMessage = (error) => {
//         console.log(error);
//     };
//     return (
//         <div>
//             <h2>React Google Login</h2>
//             <br />
//             <br />
//             <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
//         </div>
//     )
// }
// export default Login;