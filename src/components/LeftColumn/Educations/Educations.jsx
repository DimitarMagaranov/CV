import Education from './Education/Education';
import UnitContainer from '../../Shared/UnitContainer/UnitContainer';
import data from '../../../data.json';

const Educations = () => {
    return (
        <UnitContainer title={'EDUCATION'}>
            {data.educations.map((education) => {
                return <Education key={education.title} education={education} />;
            })}
        </UnitContainer>
    );
};

export default Educations;
