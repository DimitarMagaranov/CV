import './LanguagesContainer.css';
import data from '../../../data.json';
import Language from './Language/Language';

const LanguagesContainer = () => {
    return (
        <div className="half-unit-ctr">
            <h2>LANGUAGES</h2>
            {data.languages.map(language => {
                return <Language data={language}/>
            })}
        </div>
    )
}

export default LanguagesContainer;