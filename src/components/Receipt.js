import React from 'react';

const Receipt = (props) => {

    const { cartItems, Total, VAT, Discount, setVAT, setDiscount, Reset } = props
    const getTime = () => {
        const times = new Date(),
            time = times.getHours() + ':' + times.getMinutes() + ':' + times.getSeconds();
        const days = new Date(),
            date = days.getFullYear() + '-' + (days.getMonth() + 1) + '-' + days.getDate();
        return (date + " " + time)
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Receipt</h5>
                        </div>
                        <div className="modal-body">
                            <h6 className='text-center'>Sale number : {Math.floor(Math.random() * 10000000)}</h6>
                            <p>Date: {getTime()}</p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Products</th>
                                        <th scope="col">QUANTITY</th>
                                        <th scope="col">SubTotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <th>{i + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.qty}</td>
                                                <td>INR {item.price * item.qty}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Total Items</th>
                                        <th scope="col">{cartItems.length}</th>
                                        <th scope="col">INR {Total}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <th>VAT</th>
                                        <td>{VAT} %</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <th>DISCOUNT</th>
                                        <td>{Discount} %</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn m-auto" data-bs-dismiss="modal" onClick={() => { setVAT(0); setDiscount(0); Reset() }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Receipt;