import React from 'react'

const View_Products = ({ list, handleDelete, handleEdit }) => {
  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-3">Product List</h2>

        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Sr.No</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {list.map((item, index) => (
              <tr key={item}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.productName}
                    width="60"
                    height="60"
                  />
                </td>
                <td>{item.productName}</td>
                <td>₹{item.price}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  )
}

export default View_Products 