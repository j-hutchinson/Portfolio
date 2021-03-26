import { shallow } from 'enzyme';
import ProjectSection from './component';

describe('ProjectSection component', () => {
    const profile = {
        desc: "desc",
        name: "name"
    };
    test('component matches snapshot with full profile', () => {
        expect.assertions(1);

        const wrapper = shallow(<ProjectSection {...profile} />);

        expect(wrapper).toMatchSnapshot();
    });
});