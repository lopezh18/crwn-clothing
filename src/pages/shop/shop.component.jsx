import React, { Component } from 'react'
import SHOP_DATA from './shopping-data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component{
  constructor(props){
    super(props);

      this.state = {
        collections: SHOP_DATA
      }
  }

  render(){
    const { collections } = this.state;

    const collectionData = collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps}/>
    ))
    return (
      <div>
        {collectionData}
      </div>
    )
  }
}

export default ShopPage;