import { SigninData, UserData } from '@/@types/auth.types';

const url = 'https://api.stayinn.site/v1';

const authRequest = {
  getUser: () =>
    fetch(`${url}/users`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }),

  createUser: (userData: UserData) =>
    fetch(`${url}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }),

  signin: (signinData: SigninData) =>
    fetch(`${url}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signinData),
    }),

  logout: () =>
    fetch(`${url}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
};

export default authRequest;
