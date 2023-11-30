import { fetchUserData, postUserData } from './api';

const apiUrl = 'http://localhost:3003';


async function fetchData() {
  const userData = await fetchUserData();
  console.log(userData);
}

async function postData() {
  const newUser = { name: 'John Doe', email: 'john@example.com' };
  const response = await postUserData(newUser);
  console.log(response);
}
