import data from '../../../data.json';
import Project from './Project/Project';
import './PersonalProjects.css';

const PersonalProjects = () => {
    return (
        <div className="half-unit-ctr">
            <h2>PERSONAL PROJECTS</h2>
            {data.personalProjects.map((project) => {
                return <Project key={project.title} data={project} />;
            })}
        </div>
    );
};

export default PersonalProjects;
