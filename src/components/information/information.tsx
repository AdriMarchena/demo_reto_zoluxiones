import './information.css';
import logoRimac from '../../assets/images/logo-rimac.png';
import imgEmoticon from '../../assets/images/emoticon.png';
import imgEmoticonsm from '../../assets/images/emoticon-mobile.png';
interface Props {
    className: string
}

export function Information (props: Props) {

    return (
        <div className={ props.className }>
            <div className="mode-desktop">
                <img className="logo" src={logoRimac}></img>
                
                <img className="emoticon" src={imgEmoticon}></img>
                <div>
                    <label className="header-title">¡NUEVO!</label>
                    <label className="title">Seguro <label className="bold">Vehicular Tracking</label></label>
                    <label className="subtitle">Cuentanos donde le haras seguimiento a tu seguro</label>
                </div>
                <label className="footer">© 2021 RIMAC Seguros y Reaseguros.</label>
            </div>

            <div className="mode-mobile">
                <img className="logo" src={logoRimac}></img>
                <img className="emoticon-sm" src={imgEmoticonsm}></img>
                <div>
                    <label className="header-title-sm">¡NUEVO!</label>
                    <label className="title-sm">Seguro Vehicular <label className="bold">Tracking</label></label>
                    <label className="subtitle-sm">Cuentanos donde le haras seguimiento a tu seguro</label>
                </div>
            </div>
        </div>
    )
}