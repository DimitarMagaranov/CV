import './RightHalf.css';
import SkillsContainer from './SkillsContainer/SkillsContainer';
import PersonalProjects from './PersonalProjects/PersonalProjects';
import Certificates from './Certificates/Certificates';

const RightHalf = () => {
    return (
        <div id="right-half">
            <SkillsContainer />
            <PersonalProjects />
            <Certificates />
        </div>
    )
}

export default RightHalf;