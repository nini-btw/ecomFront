import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";

function Detailsc(){
    let{categoryID} =useParams();
    let [cat,setCat] =useState();

    useEffect(()=>{
        fetch(`http://localhost:9000/categories/${categoryID}`)
        .then((res)=>res.json())
        .then((data)=>{setCat(data)});
    })
    return(
        <>
        <h1>Details #{categoryID}</h1>
        {cat && <h2>{cat.name}</h2> }
        </>
    )
}
export default Detailsc;