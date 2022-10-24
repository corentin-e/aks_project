import './aks_home.css'
import AksMeaux from '../../assets/logos/aks_meaux.png';
import AksTrilport from '../../assets/logos/aks_trilport.png';

const AksHome = () =>  {
    return (
        <div className='akshome'>
            <span className='akshome_welcome'>Bienvenue sur </span>
            <div className='akshome_aks'>
                <h1>Association</h1>
                <h1>Karaté</h1>
                <h1>Shotokan</h1>
            </div>
            <span className='akshome_dojo'>Veuillez choisir votre Dojo :</span>
            <div className='akshome_links'>
                <div className='akshome_link-aks-meaux'>
                    <div className='akshome_link-dojo'>
                        <span>AKS Meaux</span>
                    </div>
                    <div className='akshome_description-dojo'>
                        <span>Description Aks Meaux</span>
                    </div>
                </div>
                <div className='akshome_link-aks-trilport'>
                    <div className='akshome_link-dojo'> 
                        <span>AKS Trilport</span>
                    </div>
                    <div className='akshome_description-dojo'>
                        <span>Description Aks Trilport</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AksHome;