import React from 'react';
import firebase from 'firebase';

export default class CategoryForm extends React.Component {
  state = {
    name: '',
    categories: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const catRef = firebase.database().ref('categories');
    const cat = {
      name: this.state.name,
    }

    catRef.push(cat);

    this.setState({
      name: ''
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

  removeItem(catID) {
    const catRef = firebase.database().ref(`/categories/${catID}`);
    catRef.remove();
  }

  render () {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="ui right labeled icon input">
            <input type="name" name="name" onChange={this.handleChange} value={this.state.name} />
            <button className="ui tag label"> Add category</button>
          </div>
        </form>
        <div className="ui list divided middle aligned">
          {this.state.categories.map(cat => {
            return (
              <div key={cat.id} className="item">
                <div className="content right floated">
                  <button className="ui icon button" onClick={() => this.removeItem(cat.id)}><i className="trash icon"></i></button>
                </div>
                <div className="content">{cat.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
