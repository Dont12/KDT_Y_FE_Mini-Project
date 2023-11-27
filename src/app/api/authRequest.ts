interface UserData {
  email: string;
  password: string;
  nickname: string;
  phone: string;
}

type SigninData = Pick<UserData, 'email' | 'password'>;

const url = 'https://api.stayinn.site/v1';

const responseBody = (res: Response) => res.json();

const authRequest = {
  getUser: () =>
    fetch(`${url}/users`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
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
};

export default authRequest;
