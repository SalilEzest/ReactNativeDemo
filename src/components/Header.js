import React, {Component} from 'react'

class Header extends Component {
  render(){
    return(<div className="Header">
        <img src={require("../public/images/coffeelogo.png")} alt="Wired Brain"/>
      </div>);
  }
}

export default Header
