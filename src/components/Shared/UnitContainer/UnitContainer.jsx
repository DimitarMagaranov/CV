import './UnitContainer.css';

const UnitContainer = (props) => {
    return (
        <div className={`unit-container ${props.title === 'SKILLS' ? 'skills-ctr' : ''}`}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}

export default UnitContainer;