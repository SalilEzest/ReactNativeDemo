import React from 'react'
import {shallow} from 'enzyme'
import Map from '../Map'
let mountMap;
beforeEach(()=> {
   mountMap = shallow(<Map />)
})
describe('Map', function(){
  it('run app without crash', function(){

  })
  it('renders a map', function() {
    const img = mountMap.find('img')
    expect(img.length).toBe(1)
  })
})
