import './SkillsContainer.css';
import skills from './skills.json';
import Skill from './Skill/Skill';

const SkillsContainer = () => {
    return (
        <div className="half-unit-ctr skills-ctr">
            <h2>SKILLS</h2>
            <div className="skills">
                {skills.map((skill) => {
                    return <Skill key={skill} skillName={skill} />;
                })}
            </div>
        </div>
    );
};

export default SkillsContainer;
