import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card } from './Card';

configure({adapter: new Adapter()});

describe('<Card />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Card />);
    });
    
    it('if user click green button div with class CardStyle should also have class CardStyleVoted', () => {
        wrapper.setProps({animationAccept: true});
        expect(wrapper.find('.CardStyle').hasClass('CardStyleVoted')).toEqual(true);
    });
        
    it('if user click red button div with class CardStyle should also have class CardStyleVoted2', () => {
        wrapper.setProps({animationReject: true});
        expect(wrapper.find('.CardStyle').hasClass('CardStyleVoted2')).toEqual(true);
    });
    it('check if prop "title" is passed to the div with class title', () => {
        wrapper.setProps({title: 'Number One'});
        expect(wrapper.find('.title').text()).toEqual('Number One');
    });
});