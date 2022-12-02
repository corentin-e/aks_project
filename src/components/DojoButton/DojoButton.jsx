import "./dojo_button.css";

const DojoButton = ({name}) => {
    return (
        <div className="dojobutton_animation">
            <button className='dojobutton'>{name}</button>
        </div>
    );
}
export default DojoButton