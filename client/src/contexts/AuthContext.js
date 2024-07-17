import { createContext, useMemo, useState } from 'react';

import * as AuthService from '../service/auth';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState('');

  const login = async ({ email, password }) => {
    try {
      const res = await AuthService.login({ email, password });
      const id = res.data.id;

      setUserId(id);
    } catch (err) {
      
    }
  };

  const value = useMemo(
    () => ({
      login,
      userId,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userId]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
