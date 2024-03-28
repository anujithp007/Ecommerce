import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CategoryCard } from '../components/CategoryCard';
import Loading from '../components/Loading';

const Category = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                let response = await axios.get('https://api.escuelajs.co/api/v1/categories');
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchCategory();
    }, []);

    return (
        <div className='flex flex-wrap justify-center gap-9'>
            {isLoading ? (
                <Loading />
            ) : (
                data.map((item) => (
                    <Link to={`/categorydetail/${item.id}`} key={item.id}>
                        <CategoryCard
                            name={item.name}
                            image={item.image}
                            updatedAt={new Date(item.updatedAt).toLocaleDateString()}
                        />
                    </Link>
                ))
            )}
        </div>
    );
};

export default Category;
