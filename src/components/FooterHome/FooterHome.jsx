import './footer_home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMedal, faSeedling, faUsers, faVihara } from '@fortawesome/free-solid-svg-icons';

const FooterHome = () => {
    return (
        <div className='footer'>
            <div className='footer_principes'>
                <div className='footer_principe'>      
                    <FontAwesomeIcon icon={faVihara} size="2xl" color="#0AAE11"/>
                    <span className='footer_principe_1'>Respect</span>
                </div>
                <div className='footer_principe'>      
                    <FontAwesomeIcon icon={faMedal} size="2xl" color="#AE0A14"/>
                    <span className='footer_principe_2'>Combativité</span>
                </div>
            </div>
            <div className='footer_principes'>
            <div className='footer_principe'>      
                    <FontAwesomeIcon icon={faSeedling} size="2xl" color="#0BB6AB"/>
                    <span className='footer_principe_3'>Humilité</span>
                </div>
                <div className='footer_principe'>      
                    <FontAwesomeIcon icon={faUsers} size="2xl" color="#8B0ED7"/>
                    <span className='footer_principe_4'>Partage</span>
                </div>
            </div>
        </div>
    );
}

export default FooterHome;