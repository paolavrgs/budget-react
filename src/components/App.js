import React from 'react';
import setDBConfig from '../data/firebase';
import './App.css';

setDBConfig()

export default class App extends React.Component {
  render() {
    return (
      <div className="app ui">
        <h1>Dashboard</h1>
      </div>
    )
  }
}
