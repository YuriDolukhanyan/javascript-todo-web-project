export const Product = ({ id, category, description, image, price, rating, title }) => {
    return (
        <div className="product-card">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <p>Price: ${price}</p>
            {/* <p>Rating: {rating}</p> */}
        </div>
    );
};

// export default Product;
