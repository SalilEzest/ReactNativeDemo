import React,{Component} from 'react'
import './Map.css'

class Map extends Component{
  render(){

    let imagePath;
    console.log(this.props.location)    
    if(this.props.imageName){
      imagePath = '../public/images/' + this.props.imageName
    }else {
      imagePath = '../public/images/none.png'
    }
    console.log(imagePath)
    console.log(typeof imagePath)
    return(<div className="MapBox">
      <img src={imagePath} alt={this.props.location}/>
    </div>)
  }
}

export default Map
