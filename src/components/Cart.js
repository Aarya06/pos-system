import React, { useState } from 'react';
import Receipt from './Receipt';

const Cart = (props) => {
    const { cartItems, AddItem, DeleteOne, DeleteAll, Reset } = props
    const [VAT, setVAT] = useState(0);
    const [Discount, setDiscount] = useState(0);
    let subTotal = 0;
    let Total = 0

    const getSubTotal = () => {
        cartItems.map((item) => {
            return subTotal = (subTotal + parseInt(item.price) * item.qty)
        })
        return subTotal;
    }

    const getTotal = () => {
        Total = subTotal + ((VAT * subTotal) / 100) - ((Discount * subTotal) / 100)
        return Total;
    }

    const updateVat = (e) => {
        if (e.target.value > 99) {
            return
        }
        let val = e.target.value / 1;
        e.target.value = val
        setVAT(e.target.value)
    }

    const updateDiscount = (e) => {
        if (e.target.value > 99) {
            return
        }
        let val = e.target.value / 1;
        e.target.value = val
        setDiscount(e.target.value)
    }


    return (
        <div className="cartContainer">
            <ul className="nav">
                <li className="navItem">PRODUCT</li>
                <li className="navItem">PRICE</li>
                <li className="navItem">QUANTITY</li>
                <li className="navItem">TOTAL</li>
            </ul>

            <div className="cartItemsContainer">
                {cartItems.length < 1 ?
                    <p className="noProd">THERE ARE NO PRODUCTS</p> :
                    cartItems.map((cartItem, i) => {
                        return (
                            <div className="prodItems" key={i}>
                                <i className="fas fa-times-circle" onClick={() => DeleteAll(cartItem)}></i>
                                <div className="prodItemDet">{cartItem.name}</div>
                                <div className="prodItemDet">{cartItem.price}</div>
                                <div className="prodItemDet"><i className="fas fa-minus-square" onClick={() => DeleteOne(cartItem)}></i> {cartItem.qty} <i className="fas fa-plus-square" onClick={() => AddItem(cartItem)}></i></div>
                                <div className="prodItemDet">INR  {cartItem.price * cartItem.qty}</div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="priceDetail">
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th scope="row">SubTotal</th>
                            <td>
                                <p className="price">INR {getSubTotal()}</p>
                                <p className="price">{cartItems.length} items</p>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">VAT Tax</th>
                            <td className='vat-dis'>
                                <input type="number" name="vat" min="0" max="99" value={VAT} onChange={(e) => updateVat(e)} />
                                <span className='perSign'> %</span>
                                <p className="price">INR {(VAT * subTotal) / 100}</p>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">Discount</th>
                            <td className='vat-dis'>
                                <input type="number" name="discount" min="0" max="99" value={Discount} onChange={(e) => updateDiscount(e)} />
                                <span className='perSign'> %</span>
                                <p className="price">INR {(Discount * subTotal) / 100}</p>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">Total</th>
                            <td>
                                <p className="price">INR {getTotal()}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="btnContainer">
                    <button className="btnCancel" onClick={() => { Reset(); setVAT(0); setDiscount(0) }}>Cancel</button>
                    <button className="btnProcess" data-bs-toggle="modal" data-bs-target={cartItems.length > 0 ? "#exampleModal" : ""}>Process</button>
                </div>
            </div>
            <Receipt cartItems={cartItems} Total={Total} VAT={VAT} Discount={Discount} setVAT={setVAT} setDiscount={setDiscount} Reset={Reset} />
        </div>
    )
}

export default Cart;