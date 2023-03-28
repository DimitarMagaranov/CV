import data from '../../../data.json';
import WorkExp from './WorkExp/WorkExp';

const WorkExpContainer = () => {
    return (
        <div className="half-unit-ctr">
            <h2>WORK EXPERIANCE</h2>
            {data.workExperiance.map((workExp, index) => {
                return <WorkExp key={index} data={workExp} />;
            })}
        </div>
    );
};

export default WorkExpContainer;