import { createContext, useState } from 'react';

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <ToggleContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </ToggleContext.Provider>
  );
};