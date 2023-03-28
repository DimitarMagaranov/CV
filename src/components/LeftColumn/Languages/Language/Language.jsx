import { useEffect, useState } from "react";
import './Language.css';

const Language = ({data}) => {
    const [progress, setProgress] = useState([]);

    useEffect(() => {
        const temp = [];
        for (let index = 1; index <= 5; index++) {
            if (index <= data.level) {
                temp.push(<div className="full"></div>);
            } else {
                temp.push(<div className="empty"></div>);
            }
        }
        setProgress(() => temp);
    }, [data])

    return (
        <div className="language-ctr">
            <span>{data.title}</span>
            <div className="progressBar">
                {progress}
            </div>
        </div>
    )
}

export default Language;