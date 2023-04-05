import data from '../../../data.json';
import Language from './Language/Language';
import UnitContainer from '../../Shared/UnitContainer/UnitContainer';

const Languages = () => {
    return (
        <UnitContainer title={'LANGUAGES'}>
            {data.languages.map((language) => {
                return <Language data={language} />;
            })}
        </UnitContainer>
    );
};

export default Languages;
