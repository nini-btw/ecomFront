import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditC() {
  const { editID } = useParams();
  const nav = useNavigate();
  
  // State variables to store name and price
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Fetch product details and set initial values
  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${editID}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name); // Initialize name
        setPrice(data.price); // Initialize price
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, [editID]); // Run only when editID changes

  // Function to handle form submission
  const subFun = (e) => {
    e.preventDefault(); // Prevent page refresh

    fetch(`http://localhost:3000/api/products/${editID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price: parseFloat(price), // Ensure price is a number
      }),
    })
      .then((res) => {
        if (res.ok) {
          nav("/products"); // Navigate after successful update
        } else {
          console.error('Error updating product');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <>
      <form onSubmit={subFun}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name</label>
          <input
            value={name} // Controlled input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Product Price</label>
          <input
            value={price} // Controlled input
            type="number"
            className="form-control"
            id="price"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default EditC;
