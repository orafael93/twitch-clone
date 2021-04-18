import React from "react";

export const GlobalContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isReachedIn1200px, setIsReachedIn1200px] = React.useState(false);
  const [isReachedIn750px, setIsReachedIn750px] = React.useState(false);
  const [isReachedIn768px, setIsReachedIn768px] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isReachedIn1200px,
        setIsReachedIn1200px,
        isReachedIn750px,
        setIsReachedIn750px,
        isReachedIn768px,
        setIsReachedIn768px,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
