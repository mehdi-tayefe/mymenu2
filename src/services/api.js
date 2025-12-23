import axios from "axios"




const products = axios.create({
    baseURL : "https://www.thecocktaildb.com/api/json/v1/1"
})

export async function getProducts(category){
    const {data} =await products.get(`/filter.php?c=${category}`)
    return data
}


export async function getProduct(id){
    const{data} = await products.get(`/lookup.php?i=${id}`)
    return data
}
//https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17227