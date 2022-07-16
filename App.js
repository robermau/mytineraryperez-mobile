import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import {configureStore as createStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mainReducer from './assets/redux/reducers/mainReducers';
 import { NavigationContainer } from '@react-navigation/native';




const reduxStore =createStore({reducer:mainReducer})



export default function App() {
  return (
<Provider store={reduxStore}>
<NavigationContainer>



<MainContainer/>
</NavigationContainer>
    

    </Provider>
  );
}

