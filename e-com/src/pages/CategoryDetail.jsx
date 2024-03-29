import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Cards from '../components/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../redux/Slice';
import Loading from '../components/Loading';

const CategoryDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.datafetch.cart);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                let response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
                setData(response.data);
                setIsLoading(false);
            } catch (e) {
                console.log(e.message);
            }
        };
        fetchCategory();
    }, [id]);

    const handleAddCart = (id) => {
        const newItem = data.find((item) => item.id === id);
        if (newItem) {
            dispatch(addCart(newItem));
        }
    };

    const handleRemoveCart = (id) => {
        dispatch(removeCart(id));
    };

    const isItemInCart = (id) => {
        return carts.some((item) => item.id === id);
    };

    return (
        <div>
            <div className='flex flex-wrap justify-center gap-4 mt-7 mx-6'>
                {isLoading ? (
                    <Loading />
                ) : (
                    data.map((item) => (
                        <div className='flex-col' key={item.id}>
                            <Link to={`/detailpage/${item.id}`}>
                                <Cards title={item.title} price={item.price} images={item.images} />
                            </Link>
                            <div>
                                <div className=''>
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
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CategoryDetail;
