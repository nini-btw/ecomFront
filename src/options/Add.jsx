import {useState} from "react";
import { useNavigate } from "react-router-dom";
function Add(){
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    let nav=useNavigate();

    const subFunction =(e)=>{
        e.preventDefault();
        fetch('http://localhost:3000/api/products',{
            method : "POST",
            headers: {
                "Content-Type" : "application/json",  
            },
            body : JSON.stringify({
                name,
                price
            })
        })
        .then(nav('/products'));
    }
    return(
        <>
            <form onSubmit={subFunction}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        onChange={(e)=>{
                            setName(e.target.value);
                        }}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Product Price</label>
                    <input 
                        type="number"
                        className="form-control"
                        id="price"
                        aria-describedby="emailHelp"
                        placeholder="Price"
                        onChange={(e)=>{
                            setPrice(e.target.value + "");
                        }}
                        />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Add;