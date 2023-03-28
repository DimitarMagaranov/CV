import './LeftHalf.css';
import EducationContainer from './EducationContainer/EducationContainer';
import WorkExpContainer from './WorkExpContainer/WorkExpContainer';
import LanguagesContainer from './LanguagesContainer/LanguagesContainer';

const LeftHalf = () => {
    return (
        <div id="left-half">
            <EducationContainer />
            <WorkExpContainer />
            <LanguagesContainer />
        </div>
    );
};

export default LeftHalf;
