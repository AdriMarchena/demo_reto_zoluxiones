import './headboard.css';
import imgPhone from '../../assets/images/phone.png';

export function Headboard () {

    return (
        <div>
            <label className="doubt">¿Tienes alguna duda?</label>
            <img className="icon-phone" src={imgPhone}></img>
            <label className="number-phone">(01) 411 6001</label>
        </div>        
    )
}