import './Certificate.css';
import HyperLink from '../../../HyperLink/HyperLink';

const Certificate = ({data}) => {
    return <p className="certificate">{data.title} <HyperLink url={data.url}/></p>
}

export default Certificate;