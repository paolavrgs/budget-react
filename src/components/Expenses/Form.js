import React from 'react';
import firebase from 'firebase';
export default class Form extends React.Component {
  state = {
    date: new Date(),
    description: '',
    amount: 0,
    category_id: '',
    categories: []
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
      amount: this.state.amount,
      category_id: this.state.category_id
    }

    itemsRef.push(item);

    this.setState({
      date: new Date(),
      description: '',
      amount: 0,
      category_id: ''
    });
  }

  componentDidMount() {
    const catRef = firebase.database().ref('categories');
    catRef.on('value', (snapshot) => {
      let categories = snapshot.val();
      let newState = [];
      for (let cat in categories) {
        newState.push({
          id: cat,
          name: categories[cat].name
        });
      }
      this.setState({
        categories: newState
      });
    });
  }

  render () {
    const options = this.state.categories.map(option =>
      <option key={option.id} value={option.id}>{option.name}</option>
    )
    return (
      <form className="ui form">
        <table className="ui single-line table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
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
                <select name="category_id" onChange={this.handleChange} value={this.state.category_id} >
                  <option value="">Choose one</option>
                  {options}
                </select>
              </td>
              <td className="field">
                <div className="ui labeled input">
                  <label for="amount" className="ui label">$</label>
                  <input type="text" name="amount" onChange={this.handleChange} value={this.state.amount} />
                </div>
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
