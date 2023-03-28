import { Link } from 'react-router-dom';
import './Contacts.css';

const Contacts = () => {
    return (
        <div id="contacts-ctr">
            <p>
                <i class="fas fa-map-marker-alt"></i> Sofia, Bulgaria
            </p>
            <p>
                <Link to={'https://www.linkedin.com/in/dimitar-magaranov-101019207/'}>
                    <i class="fab fa-linkedin"></i> linkedin.com/in/dimitar-magaranov-101019207
                </Link>
            </p>
            <p>
                <Link to={'mailto:dimitar.magaranov1@gmail.com'}>
                    <i class="fas fa-envelope"></i> dimitar.magaranov1@gmail.com
                </Link>
            </p>
            <p>
                <Link to={'https://github.com/DimitarMagaranov'}>
                    <i class="fab fa-github"></i> github.com/DimitarMagaranov
                </Link>
            </p>
            <p>
                <i class="fas fa-phone"></i> +359877005195
            </p>
        </div>
    );
};

export default Contacts;
