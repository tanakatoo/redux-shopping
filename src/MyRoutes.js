import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Cart from "./Cart"
import ProductDetail from "./ProductDetail"

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default MyRoutes