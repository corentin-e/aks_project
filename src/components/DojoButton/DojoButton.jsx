import "./dojo_button.css";
import {Link} from "react-router-dom";

const DojoButton = ({name}) => {
    return (
        <Link to="/Home">
            <button className='dojobutton'><span className="dojobutton_name">{name}</span></button>
        </Link>
    );
}
export default DojoButton