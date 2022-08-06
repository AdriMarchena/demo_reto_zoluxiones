import { useState } from "react";
import axios from 'axios';
import './form-data.css';

interface Props {
    classTitleForm: string,
    classContent1: string,
    classContent2: string,
    classContent3: string,
    classContent4: string,
    classContent5: string,
    classDivSelect: string,
    classDivInput: string,
    classInput: string,
    classButton: string,
    classErrorMessage: string,
}

export function FormData (props: Props) {

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
            <label className={ props.classTitleForm }>Déjanos tus datos</label>
            <div className={ props.classContent1 }>
                <div className={ props.classDivSelect }>
                    <select id="mainselection" className="select-doc">
                        <option>DNI</option>
                        <option>RUC</option>
                    </select>
                </div>
                <div className={ props.classDivInput }>
                    <input 
                        placeholder="Nro. de doc" 
                        className={ props.classInput } 
                        name="nroDocument" 
                        value={nroDocument}
                        onChange={ev => setNroDocument(ev.target.value)}
                    ></input>
                </div>
            </div>
            <label className={ props.classErrorMessage }>{validate(1)}</label>
            <div className={ props.classContent2 }>
                <input 
                    placeholder="Celular"
                    className="input-form"
                    name="phone" 
                    value={phone}
                    onChange={ev => setPhone(ev.target.value)}
                ></input>
            </div>
            <label className={ props.classErrorMessage }>{validate(2)}</label>
            <div className={ props.classContent3 }>
                <input 
                    placeholder="Placa" 
                    className="input-form"
                    name="plate" 
                    value={plate}
                    onChange={ev => setPlate(ev.target.value)}
                ></input>
            </div>
            <label className={ props.classErrorMessage }>{validate(3)}</label>
            <div className={ props.classContent4 }>
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
            <div className={ props.classContent5 }>
                <button type="submit" className={ props.classButton }>COTÍZALO</button>
            </div>
        </form>
    )
}