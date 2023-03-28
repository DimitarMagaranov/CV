import Course from './Course/Course';
import './Education.css';

const Education = ({ education }) => {
    return (
        <div className="education">
            <h3 className="title">- {education.title}</h3>
            <div className="content">
                <h3 className="school">{education.school}</h3>
                <div className="duration-and-city-ctr">
                    <p>
                        {education.startDate} - {education.endDate}
                    </p>
                    <p>
                        {education.city}, {education.country}
                    </p>
                </div>
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
        </div>
    );
};

export default Education;
