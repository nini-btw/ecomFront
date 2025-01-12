import {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"

function Categories(){
    const[cat,setCat]=useState([]);

    let getAllCategories = ()=>{
        fetch('http://localhost:9000/categories')
        .then((res)=>res.json())
        .then((data)=>{
            setCat(data);
        })
    }
    useEffect(()=>{
        getAllCategories();
    },[])

    let delC = (C)=>{
        Swal.fire({
            title: `Dot you want to delete : ${C.name}`,
            showCancelButton: true,
        })
        .then((data)=>{
            {data.isConfirmed &&
                    fetch(`http://localhost:9000/categories/${C.id}`,{method : "DELETE"})
                    .then(res => res.json())
                    .then(()=>{getAllCategories()});
            }
        })
    }

    return(
        <>
            <h1 className="text-center my-4">Categories Page</h1>
            <Link to={'/categories/add'}><button className="btn btn-success mb-3 mt-1">Add Category</button></Link>
            <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Cat</th>
                <th scope="col">Product Number</th>
                <th scope="col">Option</th>
            </tr>
            </thead>
            <tbody>
                {
                    cat.map((c)=>{
                        return(
                        <tr key={c.id}>
                            <th scope="row">{c.id}</th>
                            <td>{c.name}</td>
                            <td>13</td>
                            <td>
                                <Link to={`/categories/${c.id}`}><button type="button" className="btn btn-secondary">View</button></Link>
                                <Link to={`/categories/edit/${c.id}`}><button type="button" className="btn btn-primary">Edit</button></Link>
                                <button type="button" className="btn btn-danger" onClick={()=>{delC(c)}}>Delete</button>
                            </td>
                        </tr>
                        )
                    }
                )
                }
            </tbody>
            </table>

        </>
    )
}
export default Categories;