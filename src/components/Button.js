import React,{Component} from 'react'
import './Button.css'
class Button extends Component{
  render(){
    return(<button value={this.props.location}className="location-button" onClick={this.props.handleClick}>
      {this.props.location ? this.props.location : "All Locations"}
    </button>)
  }
}

export default Button
