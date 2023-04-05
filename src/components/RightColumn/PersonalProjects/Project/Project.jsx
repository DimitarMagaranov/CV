import './Project.css';
import HyperLink from '../../../HyperLink/HyperLink';

const Project = ({ data }) => {
    return (
        <div className="sub-container project">
            <h3>{data.title}</h3>
            <p>
                {data.description} <HyperLink url={data.url} />
            </p>
        </div>
    );
};

export default Project;
