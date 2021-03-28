import { shallow } from 'enzyme';
import { darkTheme } from '../../css/tokens';
import ContactMe from './component';

describe('ContactMe component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<ContactMe theme={darkTheme} />);

        expect(wrapper).toMatchSnapshot();
    });
});