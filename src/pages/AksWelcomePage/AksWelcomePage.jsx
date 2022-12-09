import './aks_welcome_page.css'
import { Link } from "react-router-dom";
import WelcomeImage from '../../assets/images/IMG-20220706-WA0054.jpg'
import { DojoButton, FooterHome } from '../../components';

const AksWelcomePage = () =>  {
    return (
        <div className='akshome'>
            <div className='akshome_framework_image'>
                <img className='akshome_image' src={WelcomeImage} alt="welcome image"/>
            </div>
            <div className='akshome_menu'>
                <div className='akshome_menu_dojo'>
                    <span className='akshome_question_dojo'>Quel est votre dojo ?</span>
                    <div className='akshome_buttons_dojo'>
                        <Link to="/meaux">
                            <DojoButton name="Meaux"/>
                        </Link>
                        <Link to="/trilport">
                            <DojoButton name="Trilport / Changis"/>
                        </Link>
                        <Link to="/lizy">
                            <DojoButton name="Lizy / Mary"/>
                        </Link>
                        <Link to="magny">
                            <DojoButton name="Magny-le-Hongre"/>
                        </Link>
                    </div>
                    <FooterHome/>
                </div>

            </div>

        </div>
    );
}

export default AksWelcomePage;