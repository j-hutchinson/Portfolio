import { shallow } from 'enzyme';
import React from 'react';
import Introduction from './component';

describe('Introduction component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<Introduction />);

        expect(wrapper).toMatchSnapshot();
    });
});