import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./Cart.css"
import { add, remove } from "./Reducers/actionTypes"
import { Link } from "react-router-dom"


const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const products = useSelector(state => state.products)

    const handleAdd = (e) => {
        dispatch(add(e.target.dataset.id))
    }
    const handleRemove = (e) => {
        dispatch(remove(e.target.dataset.id))
    }
    let total = 0
    return (
        <>
            <h1>My cart</h1>
            <div className="Cart">
                <table>
                    <tbody>
                        <tr>
                            <td className="Cart-td">Item</td>
                            <td>Qty</td>
                            <td>Price</td>
                            <td>Subtotal</td>
                        </tr>
                        {console.log('cart before displaying', cart)}
                        {cart.length > 0 ? cart.map(item => {
                            return (
                                <tr key={item.id}>

                                    <td><Link to={`/products/${item.id}`}>{products[item.id].name}</Link></td>
                                    <td>
                                        <button className="App-btn-remove" onClick={handleRemove} data-id={item.id}>-</button>
                                        {item.qty}
                                        <button className="App-btn-add" onClick={handleAdd} data-id={item.id}>+</button>
                                    </td>
                                    <td>{products[item.id].price}</td>
                                    <td>{+products[item.id].price * +item.qty}{total += +products[item.id].price * +item.qty}</td>
                                </tr>)
                        }) : ''}
                        <tr>
                            <td className="Cart-td"></td>
                            <td></td>
                            <td><b>Total</b></td>
                            <td><b>{total}</b></td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/"><button>Back to products</button></Link>
            </div >
        </>
    )
}

export default Cart