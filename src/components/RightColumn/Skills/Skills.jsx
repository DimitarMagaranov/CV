import './Skills.css';
import data from '../../../data.json';
import Skill from './Skill/Skill';
import UnitContainer from '../../UnitContainer/UnitContainer';

const Skills = () => {
    return (
        <UnitContainer title={'SKILLS'}>
            <div className="skills">
                {data.skills.map((skill) => {
                    return <Skill key={skill} skillName={skill} />;
                })}
            </div>
        </UnitContainer>
    );
};

export default Skills;
