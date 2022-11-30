import './aks_home.css'
import WelcomeImage from '../../assets/images/IMG-20220706-WA0054.jpg'

const AksHome = () =>  {
    return (
        <div className='akshome'>
            <div className='akshome_framework_image'>
                <img className='akshome_image' src={WelcomeImage} alt="welcome image"/>
            </div>
            <div className='akshome_menu'>
                <div className='akshome_menu_dojo'>
                
                </div>
            </div>

        </div>
    );
}

export default AksHome;