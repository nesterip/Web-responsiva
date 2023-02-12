import React, {useState} from 'react'
import css from './Products.module.css';
import Plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
import {useAutoAnimate} from '@formkit/auto-animate/react';

const Products = () => {

    //usado para la animacion
    const [parent] = useAutoAnimate();

    //al inicion mostrara todos los items
    const [menuProducts, setMenuProducts] = useState(ProductsData);

    //filtar los items mostrados por su tipo
    const filter = (type) => {
        setMenuProducts(ProductsData.filter(product => product.type === type));
    }

    //volver a mostrarlos todos
    const allProducts = () =>{
        setMenuProducts(ProductsData);
    }

    return (
        <div className={css.container}>
            <img src={Plane} alt="Plane"/>
            <h1>Nuestro Productos Destacados</h1>

            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={() => allProducts()}>Todos</li>
                    <li onClick={() => filter("skin care")}>Protector Corporal</li>
                    <li onClick={() => filter("conditioner")}>Acondicionadores</li>
                    <li onClick={() => filter("foundation")}>Bases</li>
                </ul>

                <div className={css.list} ref={parent}>
                    {
                        menuProducts.map((product, i) => (
                            <div className={css.product}>
                                <div className="left-s">
                                    <div className="name-s">
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                    <span>${product.price}.00</span>
                                    <div>Show Now</div>
                                </div>
                                <img src={product.img} alt="imagen producto" className='img-p'/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products