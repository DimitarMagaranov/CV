import './Skills.css';
import data from '../../../data.json';
import Skill from './Skill/Skill';
import UnitContainer from '../../Shared/UnitContainer/UnitContainer';

const Skills = () => {
    return (
        <UnitContainer title={'SKILLS'}>
            <div className="sub-container skills">
                {data.skills.map((skill) => {
                    return <Skill key={skill} skillName={skill} />;
                })}
            </div>
        </UnitContainer>
    );
};

export default Skills;
