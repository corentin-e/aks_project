import "./dojo_button.css";
import {Link} from "react-router-dom";

const DojoButton = ({name}) => {
    return (
        <button className='dojobutton'><span className="dojobutton_name">{name}</span></button>
    );
}
export default DojoButton