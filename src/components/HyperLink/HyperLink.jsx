import { Link } from 'react-router-dom';
import './HyperLink.css';

const HyperLink = ({url}) => {
    return <Link to={url}><i className="fas fa-external-link-alt hyper-link"></i></Link>
}

export default HyperLink;