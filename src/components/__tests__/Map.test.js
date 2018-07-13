import React from 'react'
import {shallow} from 'enzyme'
import Map from '../Map'

describe('Map',() => {
  let mountedMap;
  let props;
  beforeEach(function(){
    props = {
      'imageName' : "testMap.png"
    }
    mountedMap = shallow(<Map />)
  })
  it('renders app without crash', () => {
    let mountMap = shallow(<Map />)
  })
  it('renders none when no image is passed', function(){
    let defaultMap = shallow(<Map />)
    const defaultImg = defaultMap.find('img [src="../public/images/none.png"]')
    expect(defaultImg.length).toBe(1)
  })
  // it('displays the map image when no params are given to it', function(){
  //   const testMap = mountedMap.find('img [src="../public/images/testMap.png"]')
  //   expect(testMap.length).toBe(1)
  // })
})
