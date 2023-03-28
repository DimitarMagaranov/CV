import './WorkExp.css';

const WorkExp = ({ data }) => {
    return (
        <div className="workExp">
            <h3 className="title">- {data.title}</h3>
            <div className="content">
                <h3 className="company">{data.company}</h3>
                <div className="duration-and-city-ctr">
                    <p>
                        {data.startDate} - {data.endDate}
                    </p>
                    <p>
                        {data.city}, {data.country}
                    </p>
                </div>
                <p className="description">
                    {data.jobDescription}
                </p>
            </div>
        </div>
    );
};

export default WorkExp;
