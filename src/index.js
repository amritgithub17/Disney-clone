import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import userReducer from "./features/User"
import movieReducer from "./features/movies"


const store = configureStore({
  reducer : 
  {
    user : userReducer,
    movie : movieReducer,

  }
  
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


