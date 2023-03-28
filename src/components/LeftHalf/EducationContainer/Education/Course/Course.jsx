import './Course.css';

const Course = ({ data }) => {
    const navigateToCoursePageHandler = (pageUrl) => {
        window.location.href = pageUrl;
    }

    return (
        <li className="course">
            <span>
                {data.title} <i onClick={() => navigateToCoursePageHandler(data.link)} className="fas fa-external-link-alt hyper-link"></i>
            </span>
        </li>
    );
};

export default Course;
