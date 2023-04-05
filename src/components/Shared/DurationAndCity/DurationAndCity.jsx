import './DurationAndCity.css';

const DurationAndCity = (props) => {
    return (
        <div className="duration-and-city-ctr">
            <p>
                {props.startDate} - {props.endDate}
            </p>
            <p>
                {props.city}, {props.country}
            </p>
        </div>
    );
};

export default DurationAndCity;