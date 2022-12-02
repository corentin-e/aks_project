import './aks_home.css'
import WelcomeImage from '../../assets/images/IMG-20220706-WA0054.jpg'
import { DojoButton, FooterHome } from '../../components';

const AksHome = () =>  {
    return (
        <div className='akshome'>
            <div className='akshome_framework_image'>
                <img className='akshome_image' src={WelcomeImage} alt="welcome image"/>
            </div>
            <div className='akshome_menu'>
                <div className='akshome_menu_dojo'>
                    <span className='akshome_question_dojo'>Quel est votre dojo ?</span>
                    <div className='akshome_buttons_dojo'>
                        <DojoButton name="Meaux"/>
                        <DojoButton name="Trilport / Changis"/>
                        <DojoButton name="Lizy / Mary"/>
                        <DojoButton name="Magny-le-Hongre"/>
                    </div>
                    <FooterHome/>
                </div>

            </div>

        </div>
    );
}

export default AksHome;