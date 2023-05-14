import React, { useEffect } from 'react'
import axios from 'axios';

const UserList = () => {

    const fetchUser = async()=>{
        const data = await axios.get('https://api.example.com/users')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        return data;
    }

    const [users, setUsers] = useState();

    useEffect(()=>{
     const usersData = fetchUser();
     setUsers(usersData)
    },[]);

  return (
    <div>
<ul>
    {
        users?.length > 0 ? users.map((user,index)=>(
            <li key={index}>

            </li>
        )) : (
            <p>
                No Users
            </p>
        )
    }
</ul>
    </div>
  )
}

export default UserList