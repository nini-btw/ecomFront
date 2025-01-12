import {useParams} from "react-router-dom";
import { useEffect,useState } from "react";

function Details(){
    let {productID} = useParams();
    const[product,setProduct] = useState({});
    
    useEffect(()=>{
        fetch(`http://localhost:3000/api/products/${productID}`)
        .then(res=>res.json())
        .then(data=>setProduct(data.data.product));
    })
    

    return(
        <>
            <h1>Details #{productID}</h1>
            <h2>Title : {product.name}</h2>
        </>
    )
}
export default Details;