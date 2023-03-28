import data from '../../../data.json';
import Certificate from './Certificate/Certificate';
import UnitContainer from '../../UnitContainer/UnitContainer';

const Certificates = () => {
    return (
        <UnitContainer title={'CERTIFICATES'}>
            {data.certificates.map((certificate) => {
                return <Certificate data={certificate} />;
            })}
        </UnitContainer>
    );
};

export default Certificates;
