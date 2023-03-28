import './HyperLink.css';

const HyperLink = ({url}) => {
    const navigateToCoursePageHandler = () => {
        window.location.href = url;
    }

    return <i onClick={navigateToCoursePageHandler} className="fas fa-external-link-alt hyper-link"></i>
}

export default HyperLink;