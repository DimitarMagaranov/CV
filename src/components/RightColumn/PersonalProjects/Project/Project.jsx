import './Project.css';
import HyperLink from '../../../HyperLink/HyperLink';

const Project = ({ data }) => {
    return (
        <div className="project">
            <h3>{data.title}</h3>
            <span>
                {data.description} <HyperLink url={data.url}/>
            </span>
        </div>
    );
};

export default Project;
