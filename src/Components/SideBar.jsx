import { Link } from "react-router-dom";
function SideBar(){
    return(
        <>
        <ul>
            <li className="list-unstyled">
                <Link to={"/products"}>Get All Products</Link>
            </li>
        </ul>
        </>
    )
}
export default SideBar;