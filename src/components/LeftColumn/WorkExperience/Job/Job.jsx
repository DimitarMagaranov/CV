import './Job.css';
import DurationAndCity from '../../../Shared/DurationAndCity/DurationAndCity';

const Job = ({ data }) => {
    return (
        <div className="sub-container job">
            <h3 className="title">{data.title}</h3>
            <h3 className="company">{data.company}</h3>
            <DurationAndCity startDate={data.startDate} endDate={data.endDate} city={data.city} country={data.country} />
            <p className="description">{data.jobDescription}</p>
        </div>
    );
};

export default Job;
