import Course from './Course/Course';
import DurationAndCity from '../../../Shared/DurationAndCity/DurationAndCity';
import './Education.css';

const Education = ({ education }) => {
    return (
        <div id="education" className="sub-container">
            <h3 className="title"> {education.title}</h3>
            <h3 className="school-name">{education.school}</h3>
            <DurationAndCity startDate={education.startDate} endDate={education.endDate} city={education.city} country={education.country} />
            {education.courses ? (
                <div className="courses">
                    <p className="title">Courses</p>
                    <ul>
                        {education.courses.map((course) => {
                            return <Course key={course.title} data={course} />;
                        })}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default Education;
