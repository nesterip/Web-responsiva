import React from 'react'
import css from './Footer.module.css';
import Logo from '../../assets/logo.png';
import {InboxIcon, PhoneIcon, 
    LocationMarkerIcon, 
    LoginIcon, 
    UsersIcon, 
    LinkIcon} from '@heroicons/react/outline';

const Footer = () => {
    return (
        <div className={css.footerWrapper}>
            <hr/>

            <div className={css.footer}>
                <div className={css.logo}>
                    <img src={Logo} alt="Logo" />
                    <span>amazon</span>
                </div>
                <div className={css.itemFooters}>
                    <span>Contactanos</span>
                    <span><LocationMarkerIcon className={css.iconMin}/> 111 nort avenue orlando, FL 3252</span>
                    <span><PhoneIcon className={css.iconMin}/> 532-4545-232</span>
                    <span><InboxIcon className={css.iconMin}/> support@amazon.com</span>
                </div>
                <div className={css.itemFooters}>
                    <span>Acceder</span>
                    <span><LoginIcon className={css.iconMin}/> Iniciar secion</span>
                </div>
                <div className={css.itemFooters}>
                    <span>Compañia</span>
                    <span><UsersIcon className={css.iconMin}/> Sobre nosotros</span>
                </div>
                <div className={css.itemFooters}>
                    <span>Recursos</span>
                    <span><LinkIcon className={css.iconMin}/> Terminos y Privacidad</span> 
                </div>
            </div>
            <span className={css.copyRight}>Copyright ©2022 by Amazon, Inc. <br/>All rights reserved.</span>
        </div>
    )
}

export default Footer