import "./dojo_button.css";

const DojoButton = ({name}) => {
    return (
        <button className='dojobutton'><span className="dojobutton_name">{name}</span></button>
    );
}
export default DojoButton