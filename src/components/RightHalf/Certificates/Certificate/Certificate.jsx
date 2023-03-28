import './Certificate.css';

const Certificate = ({data}) => {
    const navigateToCoursePageHandler = (url) => {
        window.location.href = url;
    }

    return <p className="certificate">{data.title} <i onClick={() => navigateToCoursePageHandler(data.url)} className="fas fa-external-link-alt hyper-link"></i></p>
}

export default Certificate;