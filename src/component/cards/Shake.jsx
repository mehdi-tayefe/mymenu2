import React, { useEffect, useRef, useState } from 'react'
import CardsItem from "./CardsItem"
import { getProducts } from '../../services/api';

function Shake() {
    const [products, setProducts] = useState([])
    const fetched = useRef(false);

    useEffect(() => {
        if (fetched.current) return;
        fetched.current = true;

        const fetchProducts = async ()=>{
            try{
                const result = await getProducts("Shake")
                setProducts(result.drinks)
                
            }
            catch(error){
                console.error("Error fetching products:", error);
            }
        };
        
        fetchProducts();
         
    },[])
  
    return (
        <div className='w-full h-max flex flex-col justify-start items-start gap-1 bg-white '>
            <div className='w-full h-10 border-b-4 flex justify-center items-center shadow border-black mb-4'>
                <div className='text-center font-bold'>Shake</div>
            </div>
            {
                products.slice(0 ,6).map((item)=>(
                        <CardsItem key={item.idDrink} name = {item.strDrink}  img={item.strDrinkThumb}/>
                ))
            }

        </div>
    )
}

export default Shake