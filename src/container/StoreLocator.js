import React, {Component} from 'react';
import axios from 'axios'
import Header from '../components/Header'
import Map from '../components/Map'
import Button from '../components/Button'
import mapChooser from '../mapChooser'

class StoreLocator extends Component {
  constructor(props){
    super(props)
    this.state = { // this is a object notation -> {...}
      currentMap: 'none.png',
      shops : []
    }
    this.chooseMap = this.chooseMap.bind(this)
  }
  async componentDidMount(){
    let response = await axios.get('http://localhost:3000/data/shops.json')
    this.setState({
      shops:response.data.shops
    })
  }
  //e is event object
  chooseMap(e){
    this.setState({currentMap : mapChooser(e.target.value)})
  }

  render(){
    let storeButtons =  this.state.shops.map((shop,id)=> {
      return(<Button handleClick={this.chooseMap} key={id} location={shop.location} />)
    })
    return(
      <div>
        <Header/>
        <div>
          {storeButtons}
        </div>
        <Map imageName={this.state.currentMap} location={this.props.location}/>
      </div>
    );
  }
}

export default StoreLocator
