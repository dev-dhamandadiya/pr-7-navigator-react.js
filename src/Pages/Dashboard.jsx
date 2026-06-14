import React from 'react'

const Dashboard = ({ list }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard</h2>

      <div className="row">
        {list.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow">

              <img
                src={item.image}
                className="card-img-top"
                alt={item.productName}
                style={{ height: "300px", objectFit: "fill"}}
              />

              <div className="card-body">
                <h5 className="card-title">
                  {item.productName}
                </h5>

                <p className="card-text">
                  <strong>Price:</strong> ₹{item.price}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard