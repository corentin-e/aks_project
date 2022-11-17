import './aks_home.css'
import AksMeaux from '../../assets/logos/aks_meaux.png';
import AksTrilport from '../../assets/logos/aks_trilport.png';
import KarateIcon from '../../assets/images/karate_icon.png';

const AksHome = () =>  {
    return (
        <div className='akshome_framework'>
            <div className='akshome_welcome-text'>
                <h1>L'Association Karaté Shotokan</h1>
                <h2>Vous souhaite la bienvenue !</h2>
            </div>
            <div className='akshome_framewor-karate-icon'>
                <img src={KarateIcon} alt="karate icon"/>
            </div>
        </div>
    );
}

export default AksHome;