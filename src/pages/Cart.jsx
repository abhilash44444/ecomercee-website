import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    // Retrieve cart products from the Redux store
    let cartProducts = useSelector((state) => state.cart);

    const dispatch=useDispatch();

     const handleRemove=(product)=>{
        dispatch(remove(product))
     }

    return (
        <div>
            <h2 className='text-center font-bold text-3xl text-white p-2 my-3 bg-pink-400'>Cart</h2>
            <div className="grid grid-cols-5 gap-4">
                {cartProducts.map((product) => (
                    <div key={product.id} className="border px-4 py-2 rounded-md bg-white flex flex-col justify-around align-middle">
                        <img src={product.image} alt={product.title} className="w-full h-34 mb-4 object-contain" />
                        <h3 className="font-semibold text-center">{product.title}</h3>
                        <h3 className='text-center'>Price: {product.price}</h3>
                        <p className="text-gray-700 text-center">{product.category}</p>
                        <button onClick={() => handleRemove(product.id)} className='border-2 rounded-md bg-blue-800 px-4 py-2 text-white font-semibold'>Remove Product</button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Cart;
