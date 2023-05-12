import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./ProductsList.css"
import { add, remove } from "./Reducers/actionTypes"
import { Link } from "react-router-dom"

const ProductsList = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const handleAdd = (e) => {
        // dispatch({ type: "add", id: e.target.dataset.id })

        dispatch(add(e.target.dataset.id))
    }
    const handleRemove = (e) => {
        // dispatch({ type: "remove", id: e.target.dataset.id })
        dispatch(remove(e.target.dataset.id))
    }
    return (
        <div className="ProductsList">
            <table >
                <tbody>
                    {Object.keys(products).map((key, i) =>
                        <tr key={key}>
                            <td className="ProductsList-td">
                                <button className="App-btn-remove" onClick={handleRemove} data-id={key}>-</button>
                                <Link to={`/products/${key}`}>{products[key].name}</Link>
                                <button className="App-btn-add" onClick={handleAdd} data-id={key}>+</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList