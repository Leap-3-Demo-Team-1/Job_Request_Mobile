import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import SplashScreen from '../component/SplashScreen';
import React from 'react';

type AuthContextValues = {};
const SplashContext = createContext({} as AuthContextValues);

export const SplashProvider = ({children}: {children: ReactNode}) => {
  const [isSplash, setIsSplash] = useState<Promise<string | null>>();
  const {getItem, setItem} = useAsyncStorage('splash_key');

  const getItemData = async () => {
    const value = getItem();
    setIsSplash(value);
  };
  const setItemData = async () => {
    await setItem('true');
  };
  useEffect(() => {
    setItemData();
    const myTimeout = setTimeout(getItemData, 3000);
  }, []);
  return (
    <SplashContext.Provider value={{}}>
      {isSplash ? children : <SplashScreen />}
    </SplashContext.Provider>
  );
};

export const useSplashContext = () => useContext(SplashContext);
