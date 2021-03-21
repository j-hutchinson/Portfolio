import { shallow } from 'enzyme';
import { CFGLogo, MendeleyLogo, CheckoutLogo } from './component';

describe('Logos component', () => {
    test('CFGLogo matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<CFGLogo />);

        expect(wrapper).toMatchSnapshot();
    });
    test('MendeleyLogo matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<MendeleyLogo />);

        expect(wrapper).toMatchSnapshot();
    });
    test('CheckoutLogo matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<CheckoutLogo />);

        expect(wrapper).toMatchSnapshot();
    });
});