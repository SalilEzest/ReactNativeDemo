import React from 'react'
// import ReactDOM from 'react-dom' //Do not need when using enzyme
import {shallow} from 'enzyme'
import StoreLocator from '../storeLocator'

let mountStoreLocator;
beforeEach( ()=> {
  mountStoreLocator = shallow(<StoreLocator />)
})
describe('Header', function(){
  it('render without crashing', function(){
    // const div = document.createElement('div') //Do not need when using enzyme
    const header = mountStoreLocator.find('Header')
    expect(header.length).toBe(1)
    // ReactDOM.render(<StoreLocator />, div)
  })
})

describe('Buttons', function(){
  it('renders buttons without crashing', function(){
    const buttons = mountStoreLocator.find('Button')
    expect(buttons.length).toBe(3)
  })
})

describe('Map', function(){
  it('renders Map without crashing', function(){
    const map = mountStoreLocator.find('Map')
    expect(map.length).toBe(1)
  })
})

describe('chooseMap', ()=> {
  it('updates this.state.currentMap using the location passed to it',()=> {
    let mountedStoreLocator = shallow(<StoreLocator />)
    let mockEvent = {target :{value: 'testland'}}
    mountedStoreLocator.instance().chooseMap(mockEvent)
    expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png')
  })
})
