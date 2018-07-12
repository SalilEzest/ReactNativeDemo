import React from 'react'
import {shallow} from 'enzyme'
import Header from '../Header'
describe('Header', function(){
  let mountHeader;
  beforeEach(() => {
    mountHeader = shallow(<Header />)
  })

  it('renders a logo', function(){
    const logoImg = mountHeader.find('img [src={require("../public/images/coffeelogo.png")}]')
    expect(logoImg.length).toBe(1)
  })
})
