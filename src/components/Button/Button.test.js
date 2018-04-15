import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button';

configure({adapter: new Adapter()});

describe('<Button />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Button />);
    });

    it('when get prop BtnType: Success, should render green button with class Success ', () => {
        wrapper.setProps({BtnType: "Success"});
        expect(wrapper.find('.Button').hasClass('Success')).toEqual(true);
    });
        
    it('when get prop BtnType: Danger, should render red button with class Danger ', () => {
        wrapper.setProps({BtnType: "Danger"});
        expect(wrapper.find('.Button').hasClass('Danger')).toEqual(true);
    });
});
