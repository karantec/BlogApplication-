import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './store';
import { Provider } from "react-redux";
import axios from "axios"
import { BrowserRouter } from 'react-router-dom';
axios.defaults.baseURL = "https://moviefinder-vp36.onrender.com/";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>,
)
