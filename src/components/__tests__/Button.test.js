import React from 'react'
import {shallow} from 'enzyme'
import Button from '../Button'

let mountButton;

beforeEach(()=>{
  mountButton = shallow(<Button />)
})

describe('Button', function(){
  it('renders button without crashing', function(){

  })

  it('renders a button', function(){
    const button = mountButton.find('button')
    expect(button.length).toBe(1)
  })

})
