import React from 'react';
import firebase from 'firebase';
export default class Form extends React.Component {
  state = {
    date: new Date(),
    description: '',
    amount: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      date: this.state.date,
      description: this.state.description,
      amount: this.state.amount
    }

    itemsRef.push(item);

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
                <input type="text" name="amount" onChange={this.handleChange} value={this.state.amount} />
              </td>
              <td className="field">
                <button className="ui icon positive button" onClick={this.handleSubmit}><i className="paper plane icon"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  }
}
