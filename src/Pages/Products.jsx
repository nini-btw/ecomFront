import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"

function Products(){

    const[products,setProducts]=useState([]);

    const getAllProducts =()=>{
        fetch('http://localhost:3000/api/products')
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data.data.products);
        })
    }

    useEffect( () => {
        getAllProducts();
    },[])

    const delProduct = (p) =>{
        Swal.fire({
            title:`Are you sure you wanna delete ${p.name}`,
            showCancelButton:true,
        }).then((data)=>{
            {data.isConfirmed && 
                fetch(`http://localhost:3000/api/products/${p._id}`,{method : "DELETE"})
                    .then(res=>res.json())
                    .then(()=>{getAllProducts()});
            }
        })
    }

    return(
        <>
            <h1 className="text-center my-4">Products Page</h1>
            
            <Link to={"/products/add"}><button className="btn btn-success m-0 ">Add element</button></Link>
            
            <table className="table table-striped mt-2">
                <thead>
                    <tr className="o">
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((e)=>{
                            return( 
                                    <tr key={e._id}>
                                        <th scope="row">{e._id}</th>
                                        <td>{e.name}</td>
                                        <td>{e.price}</td>
                                        <td>
                                            <Link to={`/products/${e._id}`}><button className="btn btn-secondary">View</button></Link>
                                            <Link to={`/products/edit/${e._id}`}><button className="btn btn-primary">Edit</button></Link>
                                            <button className="btn btn-danger"onClick={()=>{delProduct(e)}}>Delete</button>
                                        </td>
                                    </tr>    
                                
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </>
    )
}
export default Products;