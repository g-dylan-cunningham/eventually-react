import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './views/Header';
import Main from './Main'


export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Main />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
