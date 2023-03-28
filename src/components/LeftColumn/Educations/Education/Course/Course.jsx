import './Course.css';
import HyperLink from '../../../../HyperLink/HyperLink';

const Course = ({ data }) => {
    return (
        <li className="course">
            <span>
                {data.title} <HyperLink url={data.url}/>
            </span>
        </li>
    );
};

export default Course;
