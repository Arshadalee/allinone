import React, { useEffect, useState } from 'react'
import User from './User';
import "./Style.css";

const GithubProfile = () => {

    const [user,setUser]=useState("arshadalee");
    const [userData,setUserData]=useState(null);
    const[loding,setLoading]=useState(true);


    const  fetchdata=async()=>{
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${user}`);
        const data=await res.json();

        if(data){
            setUserData(data);
            setUser(" ");
            setLoading(false);

        }

    }
    const handleSubmit=()=>{
        console.log("inside button functions ")
        fetchdata();
    }
    useEffect(()=>{
        fetchdata();

    },[]);
console.log(userData,"this is github userData");
    const handleSearch=(e)=>{
        setUser(e.target.value);

    }

    if(loding){
        return <h1>Loading....Please wait</h1>
    }

  return (
    <div className="github-profile-container">
    <div className="input-wrapper">
    <input type="text" placeholder="Search Github Profile" 
    name="search-by-usernam"
    value={user} onChange={handleSearch}/>
    <button onClick={handleSubmit}>Search</button>
    </div>
    
   <center>
   {userData !== null ? <User user={userData} /> : null}
   </center>
    

      
    </div>
  )
}

export default GithubProfile
