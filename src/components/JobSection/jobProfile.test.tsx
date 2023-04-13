import { shallow } from 'enzyme';
import { darkTheme } from '../../css/tokens';
import { JobSection } from './component';

describe('JobSection component', () => {
    const profile = {
        desc: "desc",
        endDate: "endDate",
        startDate: "startDate",
        name: "name",
        title: "title",
        link: 'somewhere_over_the_rainbow',
        logo: <div>logo</div>
    }
    test('component matches snapshot with full profile', () => {
        expect.assertions(1);

        const wrapper = shallow(<JobSection {...profile} theme={darkTheme} />);

        expect(wrapper).toMatchSnapshot();
    });
    test('component matches snapshot with no endDate', () => {
        expect.assertions(1);

        const wrapper = shallow(<JobSection {...profile} endDate={null} theme={darkTheme} />);

        expect(wrapper).toMatchSnapshot();
    });
});