import React from 'react';
import firebase from 'firebase';

export default class Table extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          date: items[item].date,
          description: items[item].description,
          amount: items[item].amount
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return (
      <table className="ui table">
        <tbody>
          {this.state.items.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}