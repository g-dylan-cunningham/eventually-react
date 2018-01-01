import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Store from './store'
require('./css/styles.scss');
import Layout from "./components/Layout";

let store = new Store();

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>

      <Layout/>

  </Provider>, app);
