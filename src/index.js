import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './style/tailwind.output.css';
import { Provider } from 'react-redux';
import store from './store';
import { ToastProvider } from 'react-toast-notifications';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider>
      <App />
      </ToastProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);