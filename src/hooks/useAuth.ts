import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContenxt';

export function useAuth() {
  const value = useContext(AuthContext);
  
  return value;
}