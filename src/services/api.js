import axios from "axios"




const products = axios.create({
    baseURL : "www.thecocktaildb.com/api/json/v1/1"
})

export async function getProducts(category){
    const {data} =await products(`/search.php?s=${category}`)
    return data
}
