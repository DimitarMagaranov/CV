import data from './data.json';
import Certificate from './Certificate/Certificate';

const Certificates = () => {
    return (
        <div className="half-unit-ctr">
            <h2>CERTIFICATES</h2>
            {data.map((certificate) => {
                return <Certificate data={certificate} />;
            })}
        </div>
    );
};

export default Certificates;
