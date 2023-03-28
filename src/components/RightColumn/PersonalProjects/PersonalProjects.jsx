import data from '../../../data.json';
import Project from './Project/Project';
import UnitContainer from '../../UnitContainer/UnitContainer';

const PersonalProjects = () => {
    return (
        <UnitContainer title={'PERSONAL PROJECTS'}>
            {data.personalProjects.map((project) => {
                return <Project key={project.title} data={project} />;
            })}
        </UnitContainer>
    );
};

export default PersonalProjects;
