import {shallow} from 'enzyme';
import React from 'react';
import App from '../App';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

describe('App testing', () => {
    it('Check Header Component in app', () =>{
        const appWrapper = shallow(<App />);
        const header= appWrapper.find(Header);
        expect(header).toHaveLength(1);
     expect(header.exists()).ok;
    })  
    it('Check Main Component in app', () =>{
        const appWrapper = shallow(<App />);
        const main= appWrapper.find(Main);
        expect(main).toHaveLength(1);
     expect(main.exists()).ok;
    })  
    it('Check Footer Component in app', () =>{
        const appWrapper = shallow(<App />);
        const footer= appWrapper.find(Footer);
        expect(footer).toHaveLength(1);
        expect(footer.exists()).ok;
    }) 
});