import './App.css';
import Navbar from "./components/Navbar"
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import axios from 'axios';
import React, { useState , useEffect} from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(0);
  const [data, setData] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const fetchData = () => {
    setIsLoader(true)
    axios.get("https://reqres.in/api/users?page=1").then(
      (response) => {
        console.log("api data recieved")
        setData(response.data.data);
        setIsLoader(false)
      }
    )
  }
  useEffect(() => {
    isClicked && fetchData();
  }, [isClicked])
  
  return (
     <>
     <Navbar onSetIsClicked={setIsClicked}/>
     <div className="row justify-content-center mb-2 mx-0">
     {data&&data.map((val) => {
       return  <Layout first_name={val.first_name} id={val.id} last_name={val.last_name} email={val.email} avatar={val.avatar}/>
      })}
    
      </div>
     <Loader show={isLoader} />
     </>
    
  );}
export default App;
