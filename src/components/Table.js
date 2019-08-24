import React from 'react';
import firebase from 'firebase';

export default class Table extends React.Component {
  state = {
    items: [],
    categories: []
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
          amount: items[item].amount,
          category_id: items[item].category_id
        });
      }
      this.setState({
        items: newState
      });
    });


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

  findCategory(category_id) {
    var categoryFound = this.state.categories.filter((category) => category.id === category_id)
    return categoryFound[0].name
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
                <td>{this.findCategory(item.category_id)}</td>
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
