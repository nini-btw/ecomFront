import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditC(){
    let{editID} =useParams();
    let nav=useNavigate();
    let [name,setName]=useState("");
    let [value,setValue]=useState("");


    useEffect(()=>{
         fetch(`http://localhost:9000/categories/${editID}`)
        .then((res)=>res.json())
        .then((data)=>{
            setValue(data);
        })
    })


    let subFun =(e)=>{
        e.preventDefault();
        fetch(`http://localhost:9000/categories/${editID}`,{
            method : "PUT",
            body: JSON.stringify({name})
        })
        .then(nav('/categories'));
    }
    return(
        <>
            <div className="box w-50 h-50 position-absolute top-50 start-50 translate-middle rounded-2 shadow">
                <h1 className="text-center mt-3">Add Category</h1>
                <form onSubmit={subFun} className="mx-auto w-75 d-flex flex-column justify-content-between">
                    <div className="mb-3 mt-4">
                        <label htmlFor="cn" className="form-label">Category Name</label>
                        <input
                            defaultValue={value.name}
                            type="text"
                            className="form-control" 
                            id="cn"
                            onChange={(e)=>{
                                setName(e.target.value);
                                console.log(e.target.value);
                            }}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                </form>
            </div>
        </>
    )
}
export default EditC;
