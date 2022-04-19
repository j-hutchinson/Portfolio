import { shallow } from 'enzyme';
import { darkTheme } from '../../css/tokens';
import { ProjectSection } from './component';

describe('ProjectSection component', () => {
    const profile = {
        desc: "desc",
        name: "name"
    };
    test('component matches snapshot with full profile', () => {
        expect.assertions(1);

        const wrapper = shallow(<ProjectSection {...profile} theme={darkTheme} />);

        expect(wrapper).toMatchSnapshot();
    });
});