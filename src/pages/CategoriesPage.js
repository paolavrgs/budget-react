import React from 'react';
import CategoryForm from '../components/Categories/Form';

export default class CategoriesPage extends React.Component {
  render () {
    return (
      <div className="app">
        <h1>Create category for your expenses</h1>
        <CategoryForm />
      </div>
    )
  }
}

