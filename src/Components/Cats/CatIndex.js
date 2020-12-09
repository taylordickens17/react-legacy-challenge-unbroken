import React from 'react';
import CatList from './CatList';

export default class CatIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }

  render() {
    return (
      <div>
        <CatList cats={this.state.breeds} />
      </div>
    );
  }

}