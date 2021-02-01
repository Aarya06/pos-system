import React, { useState } from 'react';
import './App.css'
import Cart from './components/Cart';
import Products from './components/Products';
import ProductList from './data/pos.products.json'

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const AddItem = (item) => {
        const exist = cartItems.find((x) => x.name === item.name);
        if (exist) {
            setCartItems(
                cartItems.map((x) => x.name === item.name ? { ...exist, qty: exist.qty + 1 } : x)
            )
        } else {
            setCartItems([...cartItems, { ...item, qty: 1 }])
        }
    }

    const DeleteOne = (item) => {
        const exist = cartItems.find((x) => x.name === item.name);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.name !== item.name))
        } else {
            setCartItems(
                cartItems.map((x) => x.name === item.name ? { ...exist, qty: exist.qty - 1 } : x)
            )
        }
    }

    const DeleteAll = (item) => {
        setCartItems(cartItems.filter((x) => x.name !== item.name))
    }

    const Reset = () => {
        setCartItems([])
    }

    return (
        <div className="main-container">
            <Cart cartItems={cartItems} AddItem={AddItem} DeleteOne={DeleteOne} DeleteAll={DeleteAll} Reset={Reset} />
            <Products ProductList={ProductList} AddItem={AddItem} />

        </div>
    )
}

export default App;