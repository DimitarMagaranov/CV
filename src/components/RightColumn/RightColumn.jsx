import './RightColumn.css';
import Skills from './Skills/Skills';
import PersonalProjects from './PersonalProjects/PersonalProjects';
import Certificates from './Certificates/Certificates';

const RightColumn = () => {
    return (
        <div id="right-column">
            <Skills />
            <PersonalProjects />
            <Certificates />
        </div>
    );
};

export default RightColumn;
