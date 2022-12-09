import './layout.css';
import {Link} from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <div className='layout_head'>
            <Link to="/" className='layout_link_decoration'>
                <div className='layout_club_name'>
                    <div className='layout_club_name_word'>
                        <span className='layout_club_name_strong_letter'>A</span><span className='layout_club_name_light_letter'>ssociation</span>
                    </div>
                    <div className='layout_club_name_word'>
                        <span className='layout_club_name_strong_letter'>K</span><span className='layout_club_name_light_letter'>araté</span>
                    </div>
                    <div className='layout_club_name_word'>
                        <span className='layout_club_name_strong_letter'>S</span><span className='layout_club_name_light_letter'>hotokai</span>
                    </div>
                </div>
            </Link>   
                <div>
                    <span className='layout_welcome_message'>Bienvenue !</span>
                </div>
            </div>
            {children}
        </div>
    );

}
export default Layout;