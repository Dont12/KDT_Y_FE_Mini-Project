import React from 'react';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('데이터를 가져오는 데 실패했습니다.');
  }

  return res.json();
}

async function getUser() {
  const res = await fetch(`https://mock.stayinn.site/v1/users`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}

const HomePage = async () => {
  // const data = await authRequest.getUser();
  // const data = await getData();
  const user = await getUser();
  console.log(user);

  return <div>main</div>;
};
export default HomePage;

// => http://localhost:3000/
