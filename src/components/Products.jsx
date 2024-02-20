
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [product, setProduct] = useState([])

    useEffect(() => {
        ; (async () => {

            try {
                setLoading(true)
                setError(false)
                const res = await axios.get('https://fakestoreapi.com/products')
                setProduct(res.data)
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
                console.log("error occured ", error)
            }


        })()
    }, [])
    return (
        <div className="container mx-auto">
            {loading && <h1 className='text-center font-bold text-4xl'>Loading...</h1>}
            {error && <h1>Something went wrong</h1>}
            <div className="grid grid-cols-5 gap-4">
                {product.map((products) => (
                    <div key={products.id} className="border px-4 py-2 rounded-md bg-white flex flex-col justify-around align-middle">
                        <img src={products.image} alt={products.title} className="w-full h-34 mb-4 object-contain" />
                        <h3 className=" font-semibold text-center">{products.title}</h3>
                        <h3 className='text-center'>Price:{products.price}</h3>
                        <p className="text-gray-700 text-center">{products.category}</p>
                        <button className='border-2  rounded-md bg-blue-800 px-4 py-2 text-white font-semibold'>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products