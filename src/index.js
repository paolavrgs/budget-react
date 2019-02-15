import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Table from './components/Table';
import setDBConfig from './data/firebase';
import styles from './components/App.css';

setDBConfig()

class App extends React.Component {

  render() {
    return (
      <div className="app ui container">
        <Form />
        <Table />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
