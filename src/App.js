import React, { Component } from "react";
import { jt, c, t, addLocale, useLocale } from "ttag";

import logo from "./logo.svg";
import "./App.css";

const locale = "tw";
const translationsObj = require(`../i18n/${locale}.po.json`);
addLocale(locale, translationsObj);
useLocale(locale);
const btn = <button key="btn">{t`Use Btn`}</button>;
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>{t`Hello`}</div>
        <div>{jt`Click ${btn}`}</div>
        <div>{jt`Hello ${btn}`}</div>
      </div>
    );
  }
}

export default App;
