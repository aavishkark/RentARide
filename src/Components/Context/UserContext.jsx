import { createContext, useContext, useState } from 'react';

const UserProfileContext = createContext();

export function useUserProfile() {
  return useContext(UserProfileContext);
}

export function UserProfileProvider({ children }) {
  const [userProfile, setUserProfile] = useState([{"username": "",
  "password": "",
  "name": "",
  "city": "Pune",
  "activeRides": [],
  "id": 1}]);

  const updateUserProfile = (profileData) => {
    setUserProfile(profileData);
  };

  return (
    <UserProfileContext.Provider value={{ userProfile, updateUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
}
