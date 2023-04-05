import './HyperLink.css';

const HyperLink = ({url}) => {
    const navigateToCourseUrlHandler = () => {
        window.location.href = url;
    }

    return <i onClick={navigateToCourseUrlHandler} className="fas fa-external-link-alt hyper-link"></i>
}

export default HyperLink;