'use client';

import UserContext, { users } from './user-context';
import UserProfiles from './UserProfiles';

import { Frame } from '@/components';

const UseContextComponent = () => {
  return (
    <>
      <Frame title="useContext">
        <UserContext.Provider value={users}>
          <UserProfiles />
        </UserContext.Provider>
      </Frame>
    </>
  );
};

export default UseContextComponent;
