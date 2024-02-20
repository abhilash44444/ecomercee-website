import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.log("Error occurred:", error);
            }
        };

        fetchData();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    return (
        <div className="container mx-auto">
            {loading && <h1 className='text-center font-bold text-4xl'>Loading...</h1>}
            {error && <h1>Something went wrong</h1>}
            <div className="grid grid-cols-5 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border px-4 py-2 rounded-md bg-white flex flex-col justify-around align-middle">
                        <img src={product.image} alt={product.title} className="w-full h-34 mb-4 object-contain" />
                        <h3 className="font-semibold text-center">{product.title}</h3>
                        <h3 className='text-center'>Price: {product.price}</h3>
                        <p className="text-gray-700 text-center">{product.category}</p>
                        <button onClick={() => handleAdd(product)} className='border-2 rounded-md bg-blue-800 px-4 py-2 text-white font-semibold'>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
