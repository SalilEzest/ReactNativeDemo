import React from 'react'
import {shallow} from 'enzyme'
import Button from '../Button'

describe('Button', function(){
  let mountButton;
  beforeEach(()=>{
    mountButton = shallow(<Button />)
  })
  it('renders button without crashing', function(){

  })

  it('renders a button', function(){
    const button = mountButton.find('button')
    expect(button.length).toBe(1)
  })

  it('calls a function passed to it when clicked', ()=> {
    const mockCallBack = jest.fn();
    const mountedButtonWithCallBack = shallow(<Button handleClick={mockCallBack} />)
    mountedButtonWithCallBack.find('button').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})

describe('When location is passed to it', function(){
  let mountedButton;
  let props;
  beforeEach(() => {
    props = {
      location: "Location1"
    }
    mountedButton = shallow(<Button {...props} />)
  })

  it('displays the location', function(){
    const locName = mountedButton.find('.location-button')
    expect(locName.text()).toEqual('Location1')
  })
})

describe('When no location is passed to it', function(){
  let mountedButton;
  let props;
  beforeEach(() => {
    props = {
      location: ""
    }
    mountedButton = shallow(<Button {...props} />)
  })
  it('displays all locations', function(){
    const locName = mountedButton.find('.location-button')
    expect(locName.text()).toEqual('All Locations')
  })
})
