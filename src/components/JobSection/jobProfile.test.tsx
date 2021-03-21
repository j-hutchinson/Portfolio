import { shallow } from 'enzyme';
import React from 'react';
import JobProfile from './component';

describe('JobProfile component', () => {
    const profile = {
        desc: "desc",
        endDate: "endDate",
        startDate: "startDate",
        name: "name",
        title: "title",
    }
    test('component matches snapshot with full profile', () => {
        expect.assertions(1);

        const wrapper = shallow(<JobProfile {...profile} />);

        expect(wrapper).toMatchSnapshot();
    });
    test('component matches snapshot with no endDate', () => {
        expect.assertions(1);

        const wrapper = shallow(<JobProfile {...profile} endDate={null} />);

        expect(wrapper).toMatchSnapshot();
    });
});