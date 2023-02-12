import React from 'react'
import css from './Virtual.module.css';
import shade from '../../assets/shade.png';
import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';

const Virtual = () => {
    return (
    <div className={css.virtual}>
        <div className={css.left}>
            <span>Prueba Virtual</span>
            <span>Nunca Compres el Tono Equivocado Otra Vez!</span>
            <span>Intentalo Ahora!</span>
            <img src={shade} alt="sombre facial" />
        </div>
        <div className={css.right}>
            <div className={css.wrapperCompare}>
                <ReactCompareImage className={css.compareImg} leftImage={Before} rightImage={After}/>
            </div>
        </div>
    </div>
    )
}

export default Virtual