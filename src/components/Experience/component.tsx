import { CKODesc, ElsDesc, CFGDesc } from '../../css/copy';
import JobSection from '../JobSection/component';

const Experience = (): JSX.Element => (
  <>
    <JobSection name="Checkout.com" startDate="04/01/21" title="Senior Software Engineer" desc={CKODesc} />
    <JobSection name="Code First Girls" startDate="01/20" endDate="04/20" title="Instructor" desc={CFGDesc} />
    <JobSection name="Elsevier" startDate="04/09/17" title="Graduate Engineer -> Frontend Engineer" desc={ElsDesc} />
  </>
);

export default Experience;
