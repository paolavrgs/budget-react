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
        <div className="ui segment">
          <div className="ui two statistics">
            <div className="green statistic">
              <div className="value">
                22
              </div>
              <div className="label">
                Income
              </div>
            </div>
            <div className="red statistic">
              <div className="value">
                31,200
              </div>
              <div className="label">
                Expenses
              </div>
            </div>
          </div>
        </div>
        <Form />
        <Table />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
