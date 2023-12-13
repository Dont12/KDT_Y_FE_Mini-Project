import { SigninData, UserData } from '@/@types/auth.types';
import { UserPassword } from '@/@types/mypage.types';

const url = 'https://api.stayinn.site/v1';

const responseBody = (res: Response) => res.json();

const authRequest = {
  getUser: (accessToken?: string) =>
    fetch(`${url}/users`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `accessToken=${accessToken}`,
      },
    }).then(responseBody),

  createUser: (userData: UserData) =>
    fetch(`${url}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }).then(responseBody),

  signin: (signinData: SigninData) =>
    fetch(`${url}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signinData),
    }).then(responseBody),

  logout: () =>
    fetch(`${url}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),

  changePassword: (userPassword: UserPassword) =>
    fetch(`${url}/users/password`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userPassword),
    }).then(responseBody),

  withdrawal: () =>
    fetch(`${url}/users`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(responseBody),
};

export default authRequest;
