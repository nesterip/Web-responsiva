import React, {useState} from 'react'
import css from './Header.module.css';
import Logo from '../../assets/logo.png';
import {CgShoppingBag} from 'react-icons/cg';
import {GoThreeBars} from 'react-icons/go';
//import {motion} from 'framer-motion';

const Header = () => {

    //animacion propiedad
    //const transition = {duration: 3, type: "spring"};

    //muestra o no el menu del header (usada para pantallas moviles)
    const [showMenu, setShowMenu] = useState(true);

    //metodo que se efecuta al accionar el buttom que controla
    //el menu
    const toggleMenu = ()=> {
        setShowMenu(showMenu => !showMenu);
    }

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt='logo-sitio-web' />
                <span>amazon</span>
            </div>
            <div className={css.right}>

                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars/>
                </div>

                <ul className={css.menu} style={{display: showMenu? 'inherit': 'none'}}>
                    <li>Colecciones</li>
                    <li>Marcas</li>
                    <li>Nuevos</li>
                    <li>Ofertas</li>
                    <li>ESP</li>
                </ul>
                <input type='text' className={css.search} placeholder='buscar...'/>
                <CgShoppingBag className={css.cart}/>
            </div>
        </div>
    )
}

export default Header