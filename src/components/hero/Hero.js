import React from 'react'
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import {motion} from 'framer-motion';

const Hero = () => {

    const transition = {duration: 3, type: "spring"};

    return (
        <div className={css.container}>
            {/* left side */}

            <div className={css.h_sides}>
                <span className={css.text1}>Crema protectora de la piel</span>
                
                <div className={css.text2}>
                    <span>Coleccion de Moda</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem sapiente
                    </span>
                </div>
            </div>

            {/* middle side hero imgage */}

            <div className={css.wrapper}>
            
                {/* para realizar las animaciones hay que importar el motion como
                    se hizo arriba, luego a la etiqueta a la cual queremos aplicar
                    la animacion le agregamos motion. hay que pasarle al menos 3 propiedades
                    initial que es el valor donde iniciara la animacion,
                    whileInView que es el valor que tendra mientras se este viendo,
                    y transition que tiene la duracion y el tipo de animacion */}

                {/* blue circle // animacion*/}
                <motion.div initial={{bottom: "2rem"}} 
                    whileInView={{bottom:"0rem"}}
                    transition={transition}
                    className={css.blueCircle}>
                </motion.div>
                
                {/* imagen con animacion */}
                <motion.img 
                    transition={transition}
                    initial={{bottom: "-2rem"}}
                    whileInView={{bottom: "0rem"}}
                    src={HeroImg} alt="imagen circular" width={600}/>
                
                {/* Shopping bag animacion */}
                <motion.div
                    initial={{transform: "rotate(180deg)"}}
                    whileInView={{transform: "rotate(360deg)"}}
                    transition={transition}
                    className={css.cart2}>
                    <RiShoppingBagFill/>

                    <div className={css.singup}>
                        <span>Mejores Ofertas al Registrarte</span>

                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* right side */}

            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Trafico mensual</span>
                </div>
                <div className={css.customer}>
                    <span>100k</span>
                    <span>Consumidores felices</span>
                </div>
            </div>
        </div>
    
    )
}

export default Hero