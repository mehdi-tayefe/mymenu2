import React, { useEffect, useRef, useState } from 'react'
import CardsItem from "./CardsItem"
import { getProducts } from '../../services/api';
import Loading from '../Loading/Loading';

function Beer() {
    const [products, setProducts] = useState([])
    const fetched = useRef(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (fetched.current) return;
        fetched.current = true;

        const fetchProducts = async ()=>{
            try{
                const result = await getProducts("Beer")
                setProducts(result.drinks)
                setLoading(false)
            }
            catch(error){
                console.error("Error fetching products:", error);
                setLoading(false)
            }
        };
        
        fetchProducts();
         
    },[])
  
    return (
        loading ? (<Loading />) :(
        <div className='w-full h-max flex flex-col justify-start items-start gap-2  '>
            <div className='w-full h-10 border-b-4 flex justify-center items-center shadow border-black mb-4'>
                <div className='text-center font-bold'>Beer</div>
            </div>
            {
                products.slice(0 ,6).map((item)=>(
                        <CardsItem key={item.idDrink}  id={item.idDrink} name = {item.strDrink}  img={item.strDrinkThumb}/>
                ))
            }

        </div> )
    )
}

export default Beer