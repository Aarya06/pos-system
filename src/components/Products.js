import React from 'react';

const Products = (props) => {
    const { ProductList, AddItem } = props

    return (
        <div className="prodContainer">
            {ProductList.map((product, i) => {
                return (
                    <div className="prodList" key={i} onClick={() => AddItem(product)}>
                        {product.image ? <img src={`./images/${product.image}`} alt={product.image} className='prod-img' /> : null}
                        <div className="overlay">{product.name}</div>
                        <div className="hover">
                            <p className='hover-price'>{product.price} INR</p>
                            <p className='hover-des'>{product.description}</p>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default Products;