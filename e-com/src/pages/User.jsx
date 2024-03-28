import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import Loading from '../components/Loading';

const User = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                let response = await axios.get('https://api.escuelajs.co/api/v1/users');
                setData(response.data);
                setIsLoading(false); // Set isLoading to false after fetching data
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchUser();
    }, []);

    console.log(data, 'user');

    return (
        <div className='flex flex-wrap justify-center items-center gap-10'>
            {isLoading ? <Loading /> : // Conditionally render Loading component
                data.map((item, index) => (
                    <UserCard
                        key={index} // Use a unique key for each UserCard (here using index, but better to use a unique identifier if available)
                        avathar={item.avatar}
                        name={item.name}
                        email={item.email}
                        creationAt={item.creationAt}
                        role={item.role}
                    />
                ))}
        </div>
    );
}

export default User;
