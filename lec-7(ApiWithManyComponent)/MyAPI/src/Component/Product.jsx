import React from 'react'

const Product = ({ userproducts }) => {
    return (
        <div className="app-container">
            <h1>My Product API</h1>
            <div className="product-cards-container">
                {userproducts.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div align="center" className="product-image">
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className="product-info">
                            <h2>{product.title}</h2>
                            <p className="category">Category:-{product.category}</p>
                            <p><strong>Stock:</strong> {product.stock}</p>
                            <p><strong>Weight:</strong> {product.weight}kg</p>
                            <p><strong>Rating:</strong> {product.rating}</p>
                            <p><strong>Availability:</strong> {product.availabilityStatus}</p>
                            <div className="tags">
                                <strong>Tags:</strong>
                                <ul>
                                    {product.tags.map((tag, idx) => (
                                        <li key={idx}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="dimensions">
                                <strong>Dimensions:</strong>
                                <ul>
                                    <li>Width: {product.dimensions.width}</li>
                                    <li>Height: {product.dimensions.height}</li>
                                    <li>Depth: {product.dimensions.depth}</li>
                                </ul>
                            </div>
                            <div className="reviews">
                                <strong>Reviews:</strong>
                                <ul>
                                    {product.reviews.map((review, idx) => (
                                        <li key={idx}>
                                            <p><strong>{review.reviewerName}</strong>: {review.comment}</p>
                                            <p>Rating: {review.rating}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="product-images">
                                <strong>Product Images:</strong>
                                <div className="image-gallery">
                                    {
                                        product.images.map((img, index) => (
                                            <img key={index} src={img} alt={`product-${index}`} width="70" />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product
