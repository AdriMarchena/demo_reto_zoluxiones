import React, { Component, useState } from "react";
import axios from 'axios';
import './home.css';
import logoRimac from '../../assets/images/logo-rimac.png';
import imgEmoticon from '../../assets/images/emoticon.png';
import imgEmoticonsm from '../../assets/images/emoticon-mobile.png';
import imgPhone from '../../assets/images/phone.png';
import { Information } from "../information/information";
import { Headboard } from "../headboard/headboard";
import { FormData } from "../form-data/form-data";

interface Props {
    showPage: string
}

export function Home (props: Props) {

    const [ nroDocument, setNroDocument ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ plate, setPlate ] = useState('');
    const [ terms, setTerms ] = useState('');
    
    const validate = (caseLabel: Number) => {
        let errorMessage = ''
        switch (caseLabel) {
            case 1:
                if(nroDocument !== "" && nroDocument.length > 3) errorMessage = 'DNI incorrecto';
                break;
            case 2:
                if(phone !== "" && phone.length < 9) errorMessage = 'Celular incorrecto';;
                break;
            case 3:
                if(plate !== "" && !plate.includes('@')) errorMessage = 'Placa incorrecta';;
                break;
            default:
                break;
        }
        return errorMessage;
    }

    const sendQuote = () => {
        if(nroDocument !== '' && phone !== '' && plate !=='' && terms === "true"){
            axios.get('https://jsonplaceholder.typicode.com/todos/' + nroDocument, {})
            .then((response) => {
                alert('Puede cotizar. \n Usuario: ' + response.data.userId + "\n Titulo: " + response.data.title);
            });
        } else {
            alert('No ha completado todos los campos');
        }
    }

    return (
        <div>
            <div className="wrapper">
                <div className="div-one"></div>
                <Information />
                <div>
                    <Headboard />
                    <FormData />
                </div>
                <div></div>
            </div>


            <div hidden className="wrapper-sm">
                <div className="div-one-sm">
                    <img className="logo" src={logoRimac}></img>
                    <img className="emoticon-sm" src={imgEmoticonsm}></img>
                    <div className="information">
                        <label className="header-title-sm">¡NUEVO!</label>
                        <label className="title-sm">Seguro Vehicular <label className="bold">Tracking</label></label>
                        <label className="subtitle-sm">Cuentanos donde le haras seguimiento a tu seguro</label>
                    </div>
                    <img className="icon-phone-sm" src={imgPhone}></img>
                    <label className="number-phone-sm">Llámanos</label>
                    <form
                        onSubmit={ev => {
                            ev.preventDefault();
                            sendQuote();
                        }}
                    >
                        <label className="title-form-sm">Déjanos tus datos</label>
                        <div className="div-content-1-sm">
                            <div className="div-select1-sm">
                                <select id="mainselection" className="select-doc">
                                    <option>DNI</option>
                                    <option>RUC</option>
                                </select>
                            </div>
                            <div className="div-select2-sm">
                                <input 
                                    placeholder="Nro. de doc" 
                                    className="input-doc-sm"
                                    name="nroDocument" 
                                        value={nroDocument}
                                        onChange={ev => setNroDocument(ev.target.value)}
                                ></input>
                            </div>
                        </div>
                        <label className="error-message-sm">{validate(1)}</label>
                        <div className="div-content-2-sm">
                            <input 
                                placeholder="Celular" 
                                className="input-form"
                                name="phone" 
                                value={phone}
                                onChange={ev => setPhone(ev.target.value)}
                            ></input>
                        </div>
                        <label className="error-message-sm">{validate(2)}</label>
                        <div className="div-content-3-sm">
                            <input 
                                placeholder="Placa" 
                                className="input-form"
                                name="plate" 
                                value={plate}
                                onChange={ev => setPlate(ev.target.value)}
                            ></input>
                        </div>
                        <label className="error-message-sm">{validate(3)}</label>
                        <div className="div-content-4-sm">
                            <input 
                                type="checkbox" 
                                className="checkbox"
                                name="terms"
                                value={terms}
                                onChange={ev => setTerms(String(ev.target.checked))}
                            ></input>
                            <div className="div-terms">
                                <label className="label-terms">Acepto la &nbsp;
                                    <a href="">Política de Protección de Datos Personales</a> y los 
                                    <a href="">Términos y Condiciones.</a>
                                </label>
                            </div>
                        </div>
                        <div className="div-content-5-sm">
                            <button type="submit" className="button-end-sm">COTÍZALO</button>
                        </div>
                    </form>
                </div>
                <div></div>
            </div>


        </div>
        
    )
}