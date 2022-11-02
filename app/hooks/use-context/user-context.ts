import { createContext } from 'react';
const users = [
  {
    name: 'Lars Jeppesen',
    occupation: 'Wizard'
  },
  {
    name: 'Simone Araujo',
    occupation: 'Lawyer'
  }
];

const UserContext = createContext(users);

export default UserContext;

export { users };
