import Education from './Education/Education';
import './EducationContainer.css';
import educations from './educations.json';

const EducationContainer = () => {
    return (
        <div className="half-unit-ctr">
            <h2>EDUCATION</h2>
            {educations.map((education) => {
                return <Education key={education.title} education={education} />;
            })}
        </div>
    );
};

export default EducationContainer;
