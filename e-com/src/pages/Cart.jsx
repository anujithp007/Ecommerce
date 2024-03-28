import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../redux/Slice';
import Cards from '../components/Cards';
import Loading from '../components/Loading';

const Cart = () => {
    const [isLoading, setIsLoading] = useState(true); 
    const result = useSelector((state) => state.datafetch.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); 
        }, 1000); 
    }, []);

    const handleRemove = (id) => {
        dispatch(removeCart(id)); 
    };

    return (
        <div className='flex flex-wrap gap-3 justify-center'>
            {isLoading ? (
                <Loading /> // Render loading indicator if data is still being fetched
            ) : (
                result && result.length > 0 ? (
                    result.map((item) => (
                        <div key={item.id} className='flex-col border-2'>
                            <Cards title={item.title} price={item.price} image={item.images} />
                            <div>
                                <button
                                    type="button"
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items in the cart.</p>
                )
            )}
        </div>
    );
};

export default Cart;
