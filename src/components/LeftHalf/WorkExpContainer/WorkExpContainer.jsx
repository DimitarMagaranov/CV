import workExps from './workExp.json';
import WorkExp from './WorkExp/WorkExp';

const WorkExpContainer = () => {
    return (
        <div className="half-unit-ctr">
            <h2>WORK EXPERIANCE</h2>
            {workExps.map((workExp, index) => {
                return <WorkExp key={index} data={workExp} />;
            })}
        </div>
    );
};

export default WorkExpContainer;