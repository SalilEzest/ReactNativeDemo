import React, {Component} from 'react';
import Header from '../components/Header'
import Map from '../components/Map'
import Button from '../components/Button'
class StoreLocator extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Button />
        <Button />
        <Map/>
      </div>
    );
  }
}

export default StoreLocator
