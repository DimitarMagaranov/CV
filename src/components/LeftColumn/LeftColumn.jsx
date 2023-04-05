import './LeftColumn.css';
import Educations from './Educations/Educations';
import WorkExperience from './WorkExperience/WorkExperience';
import Languages from './Languages/Languages';

const LeftColumn = () => {
    return (
        <div id="left-column">
            <Educations />
            <WorkExperience />
            <Languages />
        </div>
    );
};

export default LeftColumn;
