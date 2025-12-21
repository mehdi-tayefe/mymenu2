import React, { useEffect, useRef, useState } from 'react'
import CardsItem from "./CardsItem"
import { getProduct, getProducts } from '../../services/api';
import Loading from '../Loading/Loading';
import Modal from '../modal/Modal';

function Other() {
    const [products, setProducts] = useState([])
    const fetched = useRef(false);
    const [loading, setLoading] = useState(true)
    const [isModalOn, setIsModalOn] = useState(false)


    const popupOff = () => { setIsModalOn(false) }
    const popupOn = (id) => {
        setIsModalOn(true)
        const fetchProduct = async () => {
            try {
                const result = await getProduct(id)
                console.log(result);


            }
            catch (error) {
                console.error("Error fetching products:", error);

            }
        };
        fetchProduct()
    }


    useEffect(() => {
        if (fetched.current) return;
        fetched.current = true;

        const fetchProducts = async () => {
            try {
                const result = await getProducts("Cocktail")
                setProducts(result.drinks)
                setLoading(false)
            }
            catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false)
            }
        };

        fetchProducts();

    }, [])

    return (
        loading ? (<Loading />) :
            (
                <div className='w-full h-max flex flex-col justify-start items-start gap-2  '>
                    <div className='w-full h-10 border-b-4 flex justify-center items-center shadow border-black mb-4'>
                        <div className='text-center font-bold'>Other</div>
                    </div>
                    {
                        products.slice(14, 21).map((item) => (
                            <CardsItem key={item.idDrink} id={item.idDrink} name={item.strDrink} img={item.strDrinkThumb} onClick={() => popupOn(item.idDrink)} />
                        ))
                    }
                    <Modal isOpen={isModalOn} onClose={popupOff} />
                </div>)
    )
}

export default Other