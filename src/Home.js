import React from "react"
import ProductsList from "./ProductsList"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <>
            <h1>My Products</h1>
            <div className="Home-products">
                <ProductsList />
            </div>
            <Link to='/cart' ><button>View Cart</button></Link>
        </>
    )
}

export default Home