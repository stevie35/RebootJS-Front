import { User } from "../users/types";
import axios from 'axios';
import { IProfile } from "../profile/types";
import { IConversation } from "../conversations/types";

// fetch users via the server
export function getUsers(): Promise<User[]> {
  //return axios.get('http://localhost:3000/profiles',
  // return axios.get('http://localhost:3000/profile')
  return axios.get(`${process.env.REACT_APP_BACKEND}/profile`,
  {
    withCredentials: true
  })
  .then(resp => {
      return resp.data
    })
}

export function getConnectedProfile(): Promise<User> {
  return axios.get( `${process.env.REACT_APP_BACKEND}/profile/me`, { withCredentials: true }
  ).then(resp => resp.data)
}

export function login(email: string, password: string): Promise<IProfile>{
    return axios
      .post(
        // 'http://localhost:3000/login',
        `${process.env.REACT_APP_BACKEND}/login`,
        {
          username: email,
          password: password
        },
        {
            withCredentials: true
        }
        )
      .then(resp => resp.data) 
    }

    export function register(email: string, password: string, firstname: string, lastname: string) : Promise<IProfile>{
        return axios.post(`${process.env.REACT_APP_BACKEND}/profile`, { email, password, firstname, lastname })
          .then(resp => resp.data);
}

export function getConversations(): Promise<IConversation[]>{
  return Promise.resolve([
    {
      _id: 'abcd',
      targets: [
        '5f525b03e214ac0420effae6',
        '5f58d35efd9f392e6cf3da06'
      ],
      updatedAt: new Date(),
      unseenMessages: 0,
      messages: [
        {
          _id: '1',
          conversationId: 'abcd',
          createdAt: new Date(),
          emitter: '5f525b03e214ac0420effae6',
          targets: [
            '5f58d35efd9f392e6cf3da06'
          ],
          content: 'Coucou'
        },
        {
          _id: '2',
          conversationId: 'abcd',
          createdAt: new Date(),
          emitter: '5f58d35efd9f392e6cf3da06',
          targets: [
            '5f525b03e214ac0420effae6'
          ],
          content: 'Hey Comment tu vas ?'
        }
      ]
    },
    {
      _id: 'abcde',
      targets: [
        '5f525b03e214ac0420effae6',
        '5f58d35efd9f392e6cf3da06'
      ],
      updatedAt: new Date(),
      unseenMessages: 0,
      messages: [
        {
          _id: '1',
          conversationId: 'abcde',
          createdAt: new Date(),
          emitter: '5f525b03e214ac0420effae6',
          targets: [
            '5f58d35efd9f392e6cf3da06'
          ],
          content: 'Coucou encore'
        },
        {
          _id: '2',
          conversationId: 'abcd',
          createdAt: new Date(),
          emitter: '5f58d35efd9f392e6cf3da06',
          targets: [
            '5f525b03e214ac0420effae6'
          ],
          content: 'ça faisait longtemps'
        }
      ]
    }
  ])
}

