import React,{useState,useEffect} from 'react'
import axios from 'axios'


const  UserList = () => {


    const [listOfUser, setlistOfUser] = useState([]); // where to store the returned data
    const [error, setError] = useState(null); // where to store the coming errors

 useEffect(() => {
//    function fetchData() {
//      // the function to fetch data from the api
//      fetch("https://jsonplaceholder.typicode.com/users")
//        .then(res => res.json()) // when the result comes back with success here is what to do
//        .then(res => setlistOfUser(res))
//        .catch(err => setError(err)); // if there is an error here what you have to do.
//    }

//    fetchData();
// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/users')
 .then(res => res.data)
 
 .then(res => setlistOfUser(res))
 
 .catch(err =>setError(err))
 }, []);
 
 return (
     
   <div>
      
     <ul>
       {listOfUser.map((user,key) => (
         <li key={key}>
          {`UserName : ${user.name} && Email : ${user.email}`}
         </li>
       ))}
     </ul>
   </div>
 );
};

export default UserList
