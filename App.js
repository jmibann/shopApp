import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font'

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  })
}

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
})

const store = createStore(rootReducer)

export default function App() {

  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (!isFontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setIsFontLoaded(true)} />
    )
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
