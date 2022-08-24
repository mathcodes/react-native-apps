import axios from 'axios';

// Official documentation: https://firebase.google:
// Method: POST

// Content-Type: application/json

// Endpoint

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
// Request Body Payload
// Property Name	Type	Description
// email	string	The email for the user to create.
// password	string	The password for the user to create.
// returnSecureToken	boolean	Whether or not to return an ID and refresh token. Should always be true.

const WEB_API_KEY = 'AIzaSyDCYasArcOwcALFhIj2szug5aD2PgUQu1E';

function createUSer(email, password) {
  axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + WEB_API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  )
}

// async function authenticate(mode, email, password) {
//   const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=` + WEB_API_KEY;

//   const response = await axios.post(url, {
//     email: email,
//     password: password,
//     returnSecureToken: true,
//   });

//   const token = response.data.idToken;

//   return token;
// }

// export function createUser(email, password) {
//   return authenticate('signUp', email, password);
// }

// export function login(email, password) {
//   return authenticate('signInWithPassword', email, password);
// }