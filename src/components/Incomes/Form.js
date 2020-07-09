import React from 'react';
import firebase from 'firebase';
export default class Form extends React.Component {
  state = {
    date: new Date(),
    description: '',
    amount: 0,
    category_id: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const incomesRef = firebase.database().ref('incomes');
    const income = {
      date: this.state.date,
      description: this.state.description,
      amount: this.state.amount,
    }

    incomesRef.push(income);

    this.setState({
      date: new Date(),
      description: '',
      amount: 0
    });
  }

  render () {
    return (
      <form className="ui form">
        <table className="ui single-line table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="field">
                <input type="date" name="date" onChange={this.handleChange} value={this.state.date} />
              </td>
              <td className="field">
                <input name="description" onChange={this.handleChange} value={this.state.description} />
              </td>
              <td className="field">
                <div className="ui labeled input">
                  <label for="amount" className="ui label">$</label>
                  <input type="text" name="amount" onChange={this.handleChange} value={this.state.amount} />
                </div>
              </td>
              <td className="field">
                <button className="ui icon positive button" onClick={this.handleSubmit}><i className="paper plane icon"></i>Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  }
}
