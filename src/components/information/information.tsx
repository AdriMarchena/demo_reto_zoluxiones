import './information.css';
import logoRimac from '../../assets/images/logo-rimac.png';
import imgEmoticon from '../../assets/images/emoticon.png';

export function Information () {

    return (
        <div className="div-one">
            <img className="logo" src={logoRimac}></img>
            
            <img className="emoticon" src={imgEmoticon}></img>
            <div>
                <label className="header-title">¡NUEVO!</label>
                <label className="title">Seguro <label className="bold">Vehicular Tracking</label></label>
                <label className="subtitle">Cuentanos donde le haras seguimiento a tu seguro</label>
            </div>
            <label className="footer">© 2021 RIMAC Seguros y Reaseguros.</label>
        </div>
    )
}