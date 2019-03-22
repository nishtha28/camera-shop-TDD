import {shallow} from 'enzyme';
import React from 'react';
import App from '../App';
import Main from '../components/Main';
import CameraItem from '../components/CameraItem';

describe('Main testing', () => {
    it('Check if ul exists in Main', () =>{
        const dummyprop = {value:'dummyvalue'}
        const mainWrapper = shallow(<Main cameraList={dummyprop}/>)
       const ulWrapper= mainWrapper.find('ul');
       expect(ulWrapper).toHaveLength(1);
    }) 
    it('Check if li exists in Main', () =>{
        const dummyprop = {value:'dummyvalue'}
        const mainWrapper = shallow(<Main cameraList={dummyprop}/>)
       const liWrapper= mainWrapper.find('li');
       expect(liWrapper).toHaveLength(1);
    }) 
  
    it('Check app should have a cameralist state', () =>{
        const dummyprop = {value:'dummyvalue'}
       const mainWrapper = shallow(<Main cameraList={dummyprop}/>)
    
        expect(mainWrapper.state().cameraList).toBeDefined();
    })

    it('Check state should have value given by props', () =>{
        const dummyprop = {value:'dummyvalue'}
       const mainWrapper = shallow(<Main cameraList={dummyprop}/>)
       expect(mainWrapper.state().cameraList).toEqual(dummyprop)
    }) 

  
    it('Check li should have CameraItem', () =>{
        const dummyprop = {value:'dummyvalue'}
       const mainWrapper = shallow(<Main cameraList={dummyprop}/>)
       const itemWrapper= mainWrapper.find('li CameraItem');
       expect(itemWrapper).toHaveLength(1);
    }) 
   
});