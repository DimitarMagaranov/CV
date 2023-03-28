import data from '../../../data.json';
import Job from './Job/Job';
import UnitContainer from '../../UnitContainer/UnitContainer';

const WorkExperience = () => {
    return (
        <UnitContainer title={'WORK EXPERIANCE'}>
            {data.workExperiance.map((workExp, index) => {
                return <Job key={index} data={workExp} />;
            })}
        </UnitContainer>
    );
};

export default WorkExperience;
