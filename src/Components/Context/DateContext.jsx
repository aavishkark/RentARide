import { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export function useDate() {
  return useContext(DateContext);
}

export function DateProvider({ children }) {
  const [date, setdate] = useState("");

  const updateDate = (dateData) => {
    setdate(dateData);
  };

  return (
    <DateContext.Provider value={{ date, updateDate}}>
      {children}
    </DateContext.Provider>
  );
}