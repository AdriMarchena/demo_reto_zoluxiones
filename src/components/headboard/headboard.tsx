import './headboard.css';
import imgPhone from '../../assets/images/phone.png';

export function Headboard () {

    return (
        <div>
            <div className="mode-desktop">
                <label className="doubt">¿Tienes alguna duda?</label>
                <img className="icon-phone" src={imgPhone}></img>
                <label className="number-phone">(01) 411 6001</label>
            </div>
            
            <div className="mode-mobile">
                <img className="icon-phone-sm" src={imgPhone}></img>
                <label className="number-phone-sm">Llámanos</label>
            </div>
        </div>        
    )
}