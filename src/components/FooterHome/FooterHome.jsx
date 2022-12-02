import './footer_home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faVihara } from '@fortawesome/free-solid-svg-icons';

const FooterHome = () => {
    return (
        <div className='footer'>
            <div className='footer_principes'>
                <div className='footer_principe'>      
                    <FontAwesomeIcon icon={faVihara} className='footer_icon_vihara' size="2xl" color="#0AAE11"/>
                    <span className='footer_principe_1'>Respect</span>
                </div>
            </div>
            <div className='footer_principes'>
            <   div className='footer_principe'>
                    
                </div>
                <div className='footer_principe'>
                    
                </div>
            </div>
        </div>
    );
}

export default FooterHome;