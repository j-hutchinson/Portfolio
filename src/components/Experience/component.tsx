import { CKODesc, ElsDesc, CFGDesc } from '../../css/copy';
import JobSection from '../JobSection/component';
import { Jobs } from '../constants';

const Experience = (): JSX.Element => (
  <>
    <JobSection name={Jobs.Checkout} startDate="04/01/21" title="Senior Software Engineer" desc={CKODesc} />
    <JobSection name={Jobs.CFG} startDate="01/20" endDate="04/20" title="Instructor" desc={CFGDesc} />
    <JobSection name={Jobs.Elsevier} startDate="04/09/17" title="Graduate Engineer -> Frontend Engineer" desc={ElsDesc} />
  </>
);

export default Experience;
