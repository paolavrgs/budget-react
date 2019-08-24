import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Items/Form';
import CategoryForm from './components/Categories/Form';
import Table from './components/Table';
import setDBConfig from './data/firebase';
import styles from './components/App.css';

setDBConfig()

class App extends React.Component {

  render() {
    return (
      <div className="app ui container">
        <h1>Monthly expenses</h1>
        <CategoryForm />
        <Form />
        <Table />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
