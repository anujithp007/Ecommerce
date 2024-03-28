import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeCart } from '../redux/Slice'
import Loading from '../components/Loading'

const Home = () => {
    const [data, setData] = useState([''])
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.datafetch.cart);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                let response = await axios.get('https://api.escuelajs.co/api/v1/products');
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProduct();
    }, []);

    const handleAddCart = (id) => {
        const newItem = data.find(item => item.id === id);
        if (newItem) {
            dispatch(addCart(newItem));
        }
    };

    const handleRemoveCart = (id) => {
        dispatch(removeCart(id));
    };

    const isItemInCart = (id) => {
        return carts.some(item => item.id === id);
    };

    return (
        <>
            <div className='flex flex-wrap gap-4 mt-7 mx-6 justify-center'>
                {isLoading ? (
                    <Loading />
                ) : (
                    data.map((item) => (
                        <div key={item.id} className='flex-col justify-center border-2'>
                            <Link to={`/detailpage/${item.id}`}>
                                <Cards title={item.title} price={item.price} image={item.images} />
                            </Link>
                            <div>
                                {isItemInCart(item.id) ? (
                                    <a
                                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                        onClick={() => handleRemoveCart(item.id)}
                                    >
                                        Remove from cart
                                    </a>
                                ) : (
                                    <a
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={() => handleAddCart(item.id)}
                                    >
                                        Add to cart
                                    </a>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default Home;
