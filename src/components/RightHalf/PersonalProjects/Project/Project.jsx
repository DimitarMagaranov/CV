import './Project.css';

const Project = ({ data }) => {
    const navigateToCoursePageHandler = (pageUrl) => {
        window.location.href = pageUrl;
    };

    return (
        <div className="project">
            <h3>{data.title}</h3>
            <span>
                {data.description} <i onClick={() => navigateToCoursePageHandler(data.url)} className="fas fa-external-link-alt hyper-link"></i>
            </span>
        </div>
    );
};

export default Project;
