import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"


function GoodInfoPage(){

    let [product, setProduct] = useState({})
    let {id} = useParams()
    let navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    

    useEffect(() => {
        let url = `https://fakestoreapi.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    },[])

    
    return(
        <div>
            <button onClick={goBack}>Back</button>
           <h1>{product.title}</h1>
           <img src={product.image}/>
        </div>
    )
}

export default GoodInfoPage