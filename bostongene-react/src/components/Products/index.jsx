import { useEffect } from "react";
import { useState } from "react";
import { fetchProducts } from "../../api/api";
import { Product } from "../Product";
 
const Products = () => {
    const [products, setProducts] = useState([]);

    console.log("Log ::: products ===", products);

    useEffect(() => {
        fetchProducts().then(data => setProducts(data));
    }, []);

    return (
        <>
            <h1>Products</h1>
            <div>
                {products.map((product) => (<Product key={product.id} {...product} />))}
            </div>
        </>
    );
};

export default Products;
