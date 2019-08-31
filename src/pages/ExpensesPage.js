import React from 'react';
import ExpensesForm from '../components/Expenses/Form';
import Table from '../components/Expenses/Table';

export default class ExpensesPage extends React.Component {
  render () {
    return (
      <div className="app">
        <ExpensesForm />
        <Table />
      </div>
    )
  }
}

