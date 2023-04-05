import data from '../../../data.json';
import Certificate from './Certificate/Certificate';
import UnitContainer from '../../Shared/UnitContainer/UnitContainer';

const Certificates = () => {
    return (
        <UnitContainer title={'CERTIFICATES'}>
            <div className="sub-container">
                {data.certificates.map((certificate) => {
                    return <Certificate data={certificate} />;
                })}
            </div>
        </UnitContainer>
    );
};

export default Certificates;
