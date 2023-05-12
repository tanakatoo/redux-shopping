import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { add } from "./Reducers/actionTypes"
import "./ProductDetail.css"
import { Link } from "react-router-dom"


const ProductDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const selectOneProduct = useSelector(state => state.products[id])

    const handleAdd = (e) => {
        dispatch(add(e.target.dataset.id))
    }

    return (
        <>
            <div className="ProductDetail">
                <img className="ProductDetail-img" src={selectOneProduct.image_url} />
                <div className="ProductDetail-contents">
                    <h3>{selectOneProduct.name}</h3>
                    <h4>${selectOneProduct.price}</h4>
                    <button className="App-btn-add" onClick={handleAdd} data-id={id}>Add to cart</button>
                    <h5>{selectOneProduct.description}</h5>
                </div>

            </div>
            <Link to="/"><button>Back to products</button></Link>
            <Link to='/cart' ><button>View Cart</button></Link>
        </>
    )
}

export default ProductDetail