import { shallow } from 'enzyme';
import { Toggle } from './component';

describe('Toggle component', () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    const toggleTheme = jest.fn();

    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<Toggle toggleTheme={toggleTheme} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('onClick calls toggleTheme prop', () => {
        expect.assertions(1);

        const wrapper = shallow(<Toggle toggleTheme={toggleTheme} />);
        wrapper.simulate('click')

        expect(toggleTheme).toHaveBeenCalledTimes(1);
    });
});