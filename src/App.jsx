import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Add_Products from './Pages/Add_Products'
import View_Products from './Pages/View_Products'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Header from './components/Header'
import Dashboard from './Pages/Dashboard'
import { toast, ToastContainer } from 'react-toastify'

const App = () => {

  const [product, setProduct] = useState({});
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState({});

  const navigator = useNavigate()

  const handleChange = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value })

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation())
      return
    const newList = [...list];
    if (editId != null) {
      const newList = list.map((val) => {
        if (val.id == editId) {
          return { ...product, id: editId }
        }
        return val
      });
      setList(newList);
      toast.success("data updated")
      localStorage.setItem("product", JSON.stringify(newList))
      setProduct({})
      setEditId(null)

    }
    else {
      const newList = [...list, { ...product, id: Date.now() }]
      setList(newList)
      localStorage.setItem("product", JSON.stringify(newList))
      setProduct({});
      toast.success("Product Added")
    }
  };

  const handleDelete = (id) => {
    let newList = list.filter((val) => val.id != id)
    setList(newList);
    localStorage.setItem("product", JSON.stringify(newList));
    toast.warn("product Deleted")
  };

  const handleEdit = (id) => {
    const data = list.find((val) => val.id == id)
    setProduct(data);
    setEditId(id);
    navigator('/add-products')
  };

  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem("product"));

    if (oldData) {
      setList(oldData)
    }
  }, []);

  const validation = () => {
    let error = {};

    if (!product.image)
      error.image = "Image URL is Required";

    if (!product.productName)
      error.productName = "Product Name is Required";

    if (!product.price)
      error.price = "Price is Required";

    if (!product.description)
      error.description = "Description is Required";

    setError(error);

    return Object.keys(error).length === 0;
  };

  return (
    <>
      <Header />

      <Routes>

        <Route
          path="/add-products"
          element={
            <Add_Products
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              product={product}
              error={error}
            />
          }
        />

        <Route
          path="/view-products"
          element={
            <View_Products
              list={list}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />

        <Route path="/dashboard" element={<Dashboard list={list} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App