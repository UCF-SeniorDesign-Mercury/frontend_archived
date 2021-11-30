import { createContext } from 'react';

const mainContext = createContext({
  var1: null,
  var2: 'this is var 2',
  // @ts-ignore
  login: () => {},
  // @ts-ignore
  logout: () => {},
});

export default mainContext;
