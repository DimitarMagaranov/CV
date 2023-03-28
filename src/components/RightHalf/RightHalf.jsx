import './RightHalf.css';
import SkillsContainer from './SkillsContainer/SkillsContainer';
import PersonalProjects from './PersonalProjects/PersonalProjects';

const RightHalf = () => {
    return (
        <div id="right-half">
            <SkillsContainer />
            <PersonalProjects />
        </div>
    )
}

export default RightHalf;