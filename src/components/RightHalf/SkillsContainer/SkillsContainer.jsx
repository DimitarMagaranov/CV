import './SkillsContainer.css';
import data from '../../../data.json';
import Skill from './Skill/Skill';

const SkillsContainer = () => {
    return (
        <div className="half-unit-ctr skills-ctr">
            <h2>SKILLS</h2>
            <div className="skills">
                {data.skills.map((skill) => {
                    return <Skill key={skill} skillName={skill} />;
                })}
            </div>
        </div>
    );
};

export default SkillsContainer;
