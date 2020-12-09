import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      filteredThings: []
    }
  }

  componentDidMount() {
    this.searchFunction();
  }

  searchFunction = () => {
    let result = document.getElementById('search').value.toLowerCase();
    if (result === '') {
      this.setState({
        filteredThings: this.state.things
      })
    } else {
      let filtered = this.state.things.filter((things) => {
        if (things.toLowerCase().includes(result)) {
          return things
        }
      })
      this.setState({
        filteredThings: filtered
      })
      console.log(this.state.filteredThings)
    }
  }

  render() {
    return (
      <div>
        <Input placeholder='Search Here' id="search" onChange={this.searchFunction} />
        <h3>Results:</h3>
        <p>{this.state.filteredThings}</p>
      </div>
    )
  }
}


export default SearchIndex;
