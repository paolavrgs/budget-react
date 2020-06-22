import React from 'react';
import firebase from 'firebase';

export default class Table extends React.Component {
  state = {
    incomes: []
  }

  componentDidMount() {
    const incomesRef = firebase.database().ref('incomes');
    incomesRef.on('value', (snapshot) => {
      let incomes = snapshot.val();
      let newState = [];
      for (let income in incomes) {
        newState.push({
          id: income,
          date: incomes[income].date,
          description: incomes[income].description,
          amount: incomes[income].amount
        });
      }
      this.setState({
        incomes: newState
      });
    });
  }

  removeincome(incomeId) {
    const incomeRef = firebase.database().ref(`/incomes/${incomeId}`);
    incomeRef.remove();
  }

  render() {
    return (
      <table className="ui table">
        <tbody>
          {this.state.incomes.map(income => {
            return (
              <tr key={income.id}>
                <td>{income.date}</td>
                <td>{income.description}</td>
                <td>${income.amount}</td>
                <td className="field">
                  <button className="ui icon button" onClick={() => this.removeincome(income.id)}><i className="trash icon"></i></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
