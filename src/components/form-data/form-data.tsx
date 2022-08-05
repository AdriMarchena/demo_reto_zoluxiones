import { useState } from "react";
import axios from 'axios';
import './form-data.css';

export function FormData () {

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
        <form
            onSubmit={ev => {
                ev.preventDefault();
                sendQuote();
            }}
        >
            <label className="title-form">Déjanos tus datos</label>
            <div className="div-content-1">
                <div className="div-select1">
                    <select id="mainselection" className="select-doc">
                        <option>DNI</option>
                        <option>RUC</option>
                    </select>
                </div>
                <div className="div-select2">
                    <input 
                        placeholder="Nro. de doc" 
                        className="input-doc" 
                        name="nroDocument" 
                        value={nroDocument}
                        onChange={ev => setNroDocument(ev.target.value)}
                    ></input>
                </div>
            </div>
            <label className="error-message">{validate(1)}</label>
            <div className="div-content-2">
                <input 
                    placeholder="Celular"
                    className="input-form"
                    name="phone" 
                    value={phone}
                    onChange={ev => setPhone(ev.target.value)}
                ></input>
            </div>
            <label className="error-message">{validate(2)}</label>
            <div className="div-content-3">
                <input 
                    placeholder="Placa" 
                    className="input-form"
                    name="plate" 
                    value={plate}
                    onChange={ev => setPlate(ev.target.value)}
                ></input>
            </div>
            <label className="error-message">{validate(3)}</label>
            <div className="div-content-4">
                <input 
                    id="checkboxTerms"
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
            <div className="div-content-5">
                <button type="submit" className="button-end">COTÍZALO</button>
            </div>
        </form>
    )
}