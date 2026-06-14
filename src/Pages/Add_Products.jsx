import React from 'react'

const Add_Products = ({ handleSubmit, handleChange, product, error }) => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form method='Post' onSubmit={handleSubmit}>
                            <h2 className='text-center m-3'>{product.id ? "Updated Product" : " Add Product "}</h2>

                            <div className="mb-3">
                                <label className="form-label">Image URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="image"
                                    value={product.image || ""}
                                    onChange={handleChange}
                                />
                                {error?.image && (
                                    <p className="text-danger mt-1">{error.image}</p>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="productName" className="form-label">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="productName"
                                    value={product.productName || ""}
                                    onChange={handleChange}
                                />
                                {error?.productName && (
                                    <p className="text-danger mt-1">{error.productName}</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productPrice" className="form-label">
                                    Product Price
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name='price'
                                    value={product.price || ""}
                                    onChange={handleChange}
                                />
                                {error?.price && (
                                    <p className="text-danger mt-1">{error.price}</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    value={product.description || ""}
                                    onChange={handleChange}
                                ></textarea>
                                {error?.description && (
                                    <p className="text-danger mt-1">{error.description}</p>
                                )}
                            </div>
                            <button type="submit" className="btn btn-primary">
                                {product.id ? "Update Product" : "Add Product"}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_Products