import { User } from "../users/types";
import axios from 'axios';

// fetch users via the server
export function getUsers(): Promise<User[]> {
  return axios.get('http://localhost:3000/profiles')
    .then(resp => {
      return resp.data
    })
}

