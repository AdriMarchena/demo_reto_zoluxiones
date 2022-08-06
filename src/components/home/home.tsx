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

export function Home () {

    return (
        <div>
            <div className="wrapper">
                <div className="div-one"></div>
                <Information className="div-one" />
                <div>
                    <Headboard />
                    <FormData 
                        classTitleForm="title-form"
                        classContent1="div-content-1"
                        classContent2="div-content-2"
                        classContent3="div-content-3"
                        classContent4="div-content-4"
                        classContent5="div-content-5"
                        classDivSelect="div-select1"
                        classDivInput="div-select2"
                        classInput="input-doc"
                        classButton="button-end"
                        classErrorMessage="error-message" />
                </div>
                <div></div>
            </div>


            <div hidden className="wrapper-sm">
                <div className="div-one-sm">
                    <Information className=""/>
                    <Headboard />
                    <FormData 
                        classTitleForm="title-form-sm"
                        classContent1="div-content-1-sm"
                        classContent2="div-content-2-sm"
                        classContent3="div-content-3-sm"
                        classContent4="div-content-4-sm"
                        classContent5="div-content-5-sm"
                        classDivSelect="div-select1-sm"
                        classDivInput="div-select2-sm"
                        classInput="input-doc-sm"
                        classButton="button-end-sm"
                        classErrorMessage="error-message-sm" />
                </div>
                <div></div>
            </div>


        </div>
        
    )
}