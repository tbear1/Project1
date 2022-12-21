import React, {useEffect, useState} from 'react';
import axios from 'axios';


//https://randomuser.me/api/
function Paginate() {

    const [userInfo, setUserInfo] = useState('');

    const fetchUserInfo = () => {
        return axios.get('https://randomuser.me/api/')
        .then(data => {
            // handle success
            console.log(data);
            return JSON.stringify(data);
        })
        .catch(err => {
            // handle error
            console.error(err);
        })
    }
    useEffect(() => {
        fetchUserInfo().then(randomData => {
            setUserInfo(randomData);
        })
    }, []);

    return(
        <div className='pagination'>
            <p>{userInfo}</p>

        </div>
    );

}

export default Paginate;