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

  render () {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label>Categoría nueva</label>
          <input type="name" name="name" onChange={this.handleChange} value={this.state.name} />
          <button className="ui icon positive button" onClick={this.handleSubmit}><i className="paper plane icon"></i></button>
        </form>
        {this.state.categories.map(cat => {
          return (
            <div key={cat.id}>
              <h5>{cat.name}</h5>
            </div>
          )
        })}
      </div>
    )
  }
}
