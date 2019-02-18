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

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
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
                <td className="field">
                  <button className="ui icon button" onClick={() => this.removeItem(item.id)}><i className="trash icon"></i></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}