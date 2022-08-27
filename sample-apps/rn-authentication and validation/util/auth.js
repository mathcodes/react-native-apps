import axios from 'axios';

const API_KEY = 'AIzaSyAVpYRdE_qinmQF7Ng6ehD7jf1tmRI9CPQ';

async function authenticate(mode, email, password) {
  // const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]`;
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
  const token = response.data.idToken;

  return token;
}
// OVERLY COMPLEX:
// export async function createUser(email, password) {
//   const token = await authenticate('signUp', email, password);
//   return token;
// }

// export async function login(email, password) {
//   const token = await authenticate('signInWithPassword', email, password);
//   return token;
// }

// REMOVE async await and simply return the promise which will be returned as a token via 'authenticate' function
export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export async function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}