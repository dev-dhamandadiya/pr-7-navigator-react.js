import React from 'react'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5 g-2">
                    <div className="col-md-4">
                        <div className="card" style={{ width: "18rem", height: "300px" }}>
                            <img
                                src=""
                                className="card-img-top"
                                alt="Product"
                            />

                            <div className="card-body">
                                <h5 className="card-title"></h5>

                                <p className="card-text">
                                </p>

                                <h6 className="mb-2"></h6>

                                <span className="badge bg-success mb-3">
                                   
                                </span>

                                <div className="d-flex gap-2">
                                    <button className="btn btn-warning btn-sm">
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Home