import axios from "axios"




const products = axios.create({
    baseURL : "https://www.thecocktaildb.com/api/json/v1/1"
})

export async function getProducts(category){
    const {data} =await products.get(`/filter.php?c=${category}`)
    return data
}
