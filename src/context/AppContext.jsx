// AppContext.js
import React, { createContext, useState } from 'react';
import { useAuth } from 'react-oidc-context';

// 1. Создаем сам контекст
export const AppContext = createContext();

// 2. Оборачиваем приложение в провайдер
export const AppProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light'); // состояние для темы
    const auth = useAuth();
  

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

  return (
    <AppContext.Provider value={{ auth }}>
      {children}
    </AppContext.Provider>
  );
};
